import { createSession, isValidSession } from "../../../src/node/sessionStore"

describe("sessionStore", () => {
  it("should create a 64-char hex token", () => {
    const token = createSession()
    expect(token).toMatch(/^[a-f0-9]{64}$/)
  })

  it("should validate a created session", () => {
    const token = createSession()
    expect(isValidSession(token)).toBe(true)
  })

  it("should reject an unknown token", () => {
    expect(isValidSession("not-a-real-token")).toBe(false)
  })

  it("should create unique tokens", () => {
    const a = createSession()
    const b = createSession()
    expect(a).not.toBe(b)
  })
})
