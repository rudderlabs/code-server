describe("allowedOrigins", () => {
  let mod: typeof import("../../../src/node/allowedOrigins")

  beforeEach(() => {
    jest.resetModules()
    delete process.env.CS_ALLOWED_ORIGINS
  })

  function loadModule() {
    mod = require("../../../src/node/allowedOrigins")
  }

  describe("getAllowedOrigins", () => {
    it("returns [] when env var is unset", () => {
      loadModule()
      expect(mod.getAllowedOrigins()).toStrictEqual([])
    })

    it("returns [] when env var is empty", () => {
      process.env.CS_ALLOWED_ORIGINS = ""
      loadModule()
      expect(mod.getAllowedOrigins()).toStrictEqual([])
    })

    it("parses a single origin", () => {
      process.env.CS_ALLOWED_ORIGINS = "https://app.rudderstack.com"
      loadModule()
      expect(mod.getAllowedOrigins()).toStrictEqual(["https://app.rudderstack.com"])
    })

    it("parses comma-separated origins, trims whitespace, drops empties", () => {
      process.env.CS_ALLOWED_ORIGINS = " https://a.com , https://b.com ,, https://c.com "
      loadModule()
      expect(mod.getAllowedOrigins()).toStrictEqual(["https://a.com", "https://b.com", "https://c.com"])
    })

    it("throws on invalid URL", () => {
      process.env.CS_ALLOWED_ORIGINS = "not-a-url"
      loadModule()
      expect(() => mod.getAllowedOrigins()).toThrow('CS_ALLOWED_ORIGINS: invalid URL "not-a-url"')
    })

    it("caches results (same reference on repeated calls)", () => {
      process.env.CS_ALLOWED_ORIGINS = "https://app.rudderstack.com"
      loadModule()
      const first = mod.getAllowedOrigins()
      const second = mod.getAllowedOrigins()
      expect(first).toBe(second)
    })
  })

  describe("getAllowedHosts", () => {
    it("extracts host (including port) from origins", () => {
      process.env.CS_ALLOWED_ORIGINS = "https://app.rudderstack.com,http://localhost:3000"
      loadModule()
      expect(mod.getAllowedHosts()).toStrictEqual(["app.rudderstack.com", "localhost:3000"])
    })
  })

  describe("isOriginAllowed", () => {
    it("returns true for allowed origin", () => {
      process.env.CS_ALLOWED_ORIGINS = "https://app.rudderstack.com"
      loadModule()
      expect(mod.isOriginAllowed("https://app.rudderstack.com")).toBe(true)
    })

    it("returns false for disallowed origin", () => {
      process.env.CS_ALLOWED_ORIGINS = "https://app.rudderstack.com"
      loadModule()
      expect(mod.isOriginAllowed("https://evil.com")).toBe(false)
    })
  })
})
