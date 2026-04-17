import express from "express"

jest.mock("../../../../src/node/allowedOrigins", () => ({
  getAllowedOrigins: jest.fn(() => []),
  getAllowedHosts: jest.fn(() => []),
  isOriginAllowed: jest.fn(() => false),
}))

import { getAllowedOrigins } from "../../../../src/node/allowedOrigins"
import { frameAncestorsMiddleware } from "../../../../src/node/routes/index"

describe("frameAncestorsMiddleware", () => {
  afterEach(() => {
    ;(getAllowedOrigins as jest.Mock).mockReset()
  })

  function invoke(): { header: string | undefined; nextCalled: boolean } {
    let header: string | undefined
    const res = {
      setHeader: jest.fn((name: string, value: string) => {
        if (name === "Content-Security-Policy") header = value
      }),
    } as unknown as express.Response
    const next = jest.fn()
    frameAncestorsMiddleware()({} as express.Request, res, next)
    return { header, nextCalled: next.mock.calls.length === 1 }
  }

  it("defaults to 'none' when no origins are configured", () => {
    ;(getAllowedOrigins as jest.Mock).mockReturnValue([])
    const { header, nextCalled } = invoke()
    expect(header).toBe("frame-ancestors 'none'")
    expect(nextCalled).toBe(true)
  })

  it("emits configured origins space-separated", () => {
    ;(getAllowedOrigins as jest.Mock).mockReturnValue([
      "https://app.rudderstack.com",
      "https://app.dev.rudderlabs.com",
    ])
    const { header } = invoke()
    expect(header).toBe("frame-ancestors https://app.rudderstack.com https://app.dev.rudderlabs.com")
  })
})
