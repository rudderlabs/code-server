import { mockLogger } from "../../utils/helpers"
import { createJwksFixture, JwksFixture, TEST_ISSUER } from "../../utils/jwtHelpers"

describe("jwt", () => {
  let fixture: JwksFixture
  const sessionId = "test-session-id"
  const workspaceId = "test-workspace-id"

  beforeAll(async () => {
    mockLogger()
    fixture = await createJwksFixture({ sessionId, workspaceId })
  })

  afterAll(async () => {
    await fixture.close()
  })

  function loadModule() {
    jest.resetModules()
    process.env.JWKS_URL = fixture.url
    process.env.JWT_ISSUER = TEST_ISSUER
    process.env.SESSION_ID = sessionId
    process.env.WORKSPACE_ID = workspaceId
    return require("../../../src/node/jwt") as typeof import("../../../src/node/jwt")
  }

  describe("isJwtAuthEnabled", () => {
    it("should return false when JWKS_URL is not set", () => {
      jest.resetModules()
      delete process.env.JWKS_URL
      const jwt = require("../../../src/node/jwt")
      expect(jwt.isJwtAuthEnabled()).toBe(false)
    })

    it("should return true when JWKS_URL is set", () => {
      const jwt = loadModule()
      expect(jwt.isJwtAuthEnabled()).toBe(true)
    })
  })

  describe("validateJwt", () => {
    it("should throw when JWT auth is not configured", async () => {
      jest.resetModules()
      delete process.env.JWKS_URL
      const jwt = require("../../../src/node/jwt")
      await expect(jwt.validateJwt("some-token")).rejects.toThrow("JWT auth not configured")
    })

    it("should accept a valid token", async () => {
      const jwt = loadModule()
      const token = fixture.createJwt()
      await expect(jwt.validateJwt(token)).resolves.toBeUndefined()
    })

    it("should reject an expired token", async () => {
      const jwt = loadModule()
      const now = Math.floor(Date.now() / 1000)
      const token = fixture.createJwt({
        iat: now - 120,
        exp: now - 60,
      })
      await expect(jwt.validateJwt(token)).rejects.toThrow()
    })

    it("should reject wrong audience", async () => {
      const jwt = loadModule()
      const token = fixture.createJwt({ aud: "wrong-audience" })
      await expect(jwt.validateJwt(token)).rejects.toThrow()
    })

    it("should reject wrong issuer", async () => {
      const jwt = loadModule()
      const token = fixture.createJwt({ iss: "wrong-issuer" })
      await expect(jwt.validateJwt(token)).rejects.toThrow()
    })

    it("should reject wrong sessionId", async () => {
      const jwt = loadModule()
      const token = fixture.createJwt({ sessionId: "wrong-session" })
      await expect(jwt.validateJwt(token)).rejects.toThrow("sessionId mismatch")
    })

    it("should reject wrong workspaceId", async () => {
      const jwt = loadModule()
      const token = fixture.createJwt({ workspaceId: "wrong-workspace" })
      await expect(jwt.validateJwt(token)).rejects.toThrow("workspaceId mismatch")
    })

    it("should reject replayed jti", async () => {
      const jwt = loadModule()
      const jti = "replay-jti"
      const token1 = fixture.createJwt({ jti })
      const token2 = fixture.createJwt({ jti })

      await expect(jwt.validateJwt(token1)).resolves.toBeUndefined()
      await expect(jwt.validateJwt(token2)).rejects.toThrow("jti already consumed")
    })
  })
})
