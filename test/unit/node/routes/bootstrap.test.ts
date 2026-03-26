import * as express from "express"
import * as supertest from "supertest"
import { mockLogger } from "../../../utils/helpers"
import { createJwksFixture, JwksFixture, TEST_ISSUER } from "../../../utils/jwtHelpers"

describe("bootstrap", () => {
  let fixture: JwksFixture
  const sessionId = "test-session-id"
  const workspaceId = "test-workspace-id"

  const savedEnv: Record<string, string | undefined> = {}

  function saveEnv(...keys: string[]) {
    for (const key of keys) {
      savedEnv[key] = process.env[key]
    }
  }

  function restoreEnv() {
    for (const [key, value] of Object.entries(savedEnv)) {
      if (value !== undefined) {
        process.env[key] = value
      } else {
        delete process.env[key]
      }
    }
  }

  beforeAll(async () => {
    mockLogger()
    fixture = await createJwksFixture({ sessionId, workspaceId })
  })

  afterAll(async () => {
    await fixture.close()
  })

  beforeEach(() => {
    saveEnv("JWKS_URL", "JWT_ISSUER", "SESSION_ID", "WORKSPACE_ID")
    process.env.JWKS_URL = fixture.url
    process.env.JWT_ISSUER = TEST_ISSUER
    process.env.SESSION_ID = sessionId
    process.env.WORKSPACE_ID = workspaceId
    jest.resetModules()
  })

  afterEach(() => {
    restoreEnv()
  })

  function createApp() {
    const { router } = require("../../../../src/node/routes/bootstrap")
    const app = express.default()

    app.use((req: any, _res: any, next: any) => {
      req.args = {
        "proxy-domain": [],
        "abs-proxy-base-path": "/test-session",
      }
      next()
    })

    app.use("/", router)

    app.use(((err: any, _req: any, res: any, _next: any) => {
      res.status(err.statusCode || 500).json({ error: err.message })
    }) as express.ErrorRequestHandler)

    return app
  }

  it("should redirect with session cookie on valid JWT", async () => {
    const app = createApp()
    const token = fixture.createJwt()

    const res = await supertest.default(app).get(`/?token=${token}`).expect(302)

    const cookies = res.headers["set-cookie"]
    expect(cookies).toBeDefined()
    const sessionCookie = Array.isArray(cookies)
      ? cookies.find((c: string) => c.startsWith("code-server-session="))
      : cookies
    expect(sessionCookie).toBeDefined()
    expect(sessionCookie).toMatch(/code-server-session=[a-f0-9]{64}/)
    expect(sessionCookie).toContain("HttpOnly")
    expect(sessionCookie).toContain("Secure")
    expect(sessionCookie).toContain("SameSite=None")
    expect(sessionCookie).toContain("Path=/test-session/")
    expect(res.headers.location).toBe("/test-session/")
  })

  it("should pass through when no token param", async () => {
    const app = createApp()

    // No token → next() is called → no route matches → 404
    await supertest.default(app).get("/").expect(404)
  })

  it("should return 401 on invalid JWT", async () => {
    const app = createApp()

    await supertest.default(app).get("/?token=invalid-token").expect(401)
  })

  it("should redirect to path only, dropping all query params", async () => {
    const app = createApp()
    const token = fixture.createJwt()

    const res = await supertest.default(app).get(`/?token=${token}&foo=bar`).expect(302)

    expect(res.headers.location).toBe("/test-session/")
  })

  it("should reject replayed JWT", async () => {
    const app = createApp()
    const jti = "replay-bootstrap-jti"
    const token1 = fixture.createJwt({ jti })
    const token2 = fixture.createJwt({ jti })

    await supertest.default(app).get(`/?token=${token1}`).expect(302)
    await supertest.default(app).get(`/?token=${token2}`).expect(401)
  })

  it("should redirect to / when no abs-proxy-base-path is configured", async () => {
    const { router } = require("../../../../src/node/routes/bootstrap")
    const app = express.default()

    app.use((req: any, _res: any, next: any) => {
      req.args = {
        "proxy-domain": [],
      }
      next()
    })

    app.use("/", router)

    app.use(((err: any, _req: any, res: any, _next: any) => {
      res.status(err.statusCode || 500).json({ error: err.message })
    }) as express.ErrorRequestHandler)

    const token = fixture.createJwt()
    const res = await supertest.default(app).get(`/?token=${token}`).expect(302)

    expect(res.headers.location).toBe("/")
    const cookies = res.headers["set-cookie"]
    const sessionCookie = Array.isArray(cookies)
      ? cookies.find((c: string) => c.startsWith("code-server-session="))
      : cookies
    expect(sessionCookie).toContain("Path=/")
  })
})
