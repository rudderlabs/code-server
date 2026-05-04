import express from "express"

jest.mock("../../../../src/node/allowedOrigins", () => ({
  getAllowedOrigins: jest.fn(() => []),
  getAllowedHosts: jest.fn(() => []),
  isOriginAllowed: jest.fn(() => false),
}))

import { isOriginAllowed } from "../../../../src/node/allowedOrigins"
import { corsMiddleware } from "../../../../src/node/routes/index"

describe("corsMiddleware", () => {
  afterEach(() => {
    ;(isOriginAllowed as jest.Mock).mockReset()
  })

  function invoke(originHeader?: string): {
    aclHeader: string | undefined
    varyHeader: string | undefined
    nextCalled: boolean
  } {
    const headers: Record<string, string> = {}
    const res = {
      setHeader: jest.fn((name: string, value: string) => {
        headers[name] = value
      }),
    } as unknown as express.Response
    const req = { headers: originHeader ? { origin: originHeader } : {} } as unknown as express.Request
    const next = jest.fn()
    corsMiddleware()(req, res, next)
    return {
      aclHeader: headers["Access-Control-Allow-Origin"],
      varyHeader: headers["Vary"],
      nextCalled: next.mock.calls.length === 1,
    }
  }

  it("does not set ACAO when no Origin header is present", () => {
    ;(isOriginAllowed as jest.Mock).mockReturnValue(true)
    const { aclHeader, varyHeader, nextCalled } = invoke()
    expect(aclHeader).toBeUndefined()
    expect(varyHeader).toBeUndefined()
    expect(nextCalled).toBe(true)
  })

  it("does not set ACAO when origin is not in CS_ALLOWED_ORIGINS", () => {
    ;(isOriginAllowed as jest.Mock).mockReturnValue(false)
    const { aclHeader, varyHeader } = invoke("https://app.dev.rudderlabs.com")
    expect(aclHeader).toBeUndefined()
    expect(varyHeader).toBeUndefined()
    expect(isOriginAllowed).toHaveBeenCalledWith("https://app.dev.rudderlabs.com")
  })

  it("does not set ACAO for localhost when not explicitly allowed", () => {
    ;(isOriginAllowed as jest.Mock).mockReturnValue(false)
    const { aclHeader } = invoke("http://localhost:8080")
    expect(aclHeader).toBeUndefined()
  })

  it("reflects ACAO and sets Vary when origin is allowed", () => {
    ;(isOriginAllowed as jest.Mock).mockReturnValue(true)
    const { aclHeader, varyHeader, nextCalled } = invoke("https://app.rudderstack.com")
    expect(aclHeader).toBe("https://app.rudderstack.com")
    expect(varyHeader).toBe("Origin")
    expect(nextCalled).toBe(true)
  })
})
