import * as crypto from "crypto"
import * as http from "http"

function base64url(data: Buffer | string): string {
  const buf = typeof data === "string" ? Buffer.from(data) : data
  return buf.toString("base64url")
}

export interface JwtOptions {
  sessionId?: string
  workspaceId?: string
  jti?: string
  iss?: string
  aud?: string
  exp?: number
  iat?: number
}

export interface JwksFixture {
  privateKey: crypto.KeyObject
  publicJwk: Record<string, unknown>
  server: http.Server
  url: string
  createJwt: (options?: JwtOptions) => string
  close: () => Promise<void>
}

export const TEST_ISSUER = "test-token-service"

export async function createJwksFixture(defaults: {
  sessionId: string
  workspaceId: string
}): Promise<JwksFixture> {
  const { privateKey, publicKey } = crypto.generateKeyPairSync("ed25519")

  const jwk = publicKey.export({ format: "jwk" })
  const publicJwk = {
    ...jwk,
    kid: "test-kid",
    alg: "EdDSA",
    use: "sig",
  }

  const server = http.createServer((_, res) => {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ keys: [publicJwk] }))
  })

  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve())
  })

  const addr = server.address() as { port: number }
  const url = `http://127.0.0.1:${addr.port}/.well-known/jwks.json`

  let jtiCounter = 0

  function createJwt(options: JwtOptions = {}): string {
    jtiCounter++
    const now = Math.floor(Date.now() / 1000)
    const header = { alg: "EdDSA", kid: "test-kid" }
    const payload = {
      iss: options.iss ?? TEST_ISSUER,
      sessionId: options.sessionId ?? defaults.sessionId,
      workspaceId: options.workspaceId ?? defaults.workspaceId,
      jti: options.jti ?? `jti-${jtiCounter}`,
      aud: options.aud ?? "urn:rudderstack:service:code-server",
      iat: options.iat ?? now,
      exp: options.exp ?? now + 300,
    }

    const headerB64 = base64url(JSON.stringify(header))
    const payloadB64 = base64url(JSON.stringify(payload))
    const signingInput = `${headerB64}.${payloadB64}`

    const signature = crypto.sign(null, Buffer.from(signingInput), privateKey)
    const signatureB64 = base64url(signature)

    return `${signingInput}.${signatureB64}`
  }

  async function close(): Promise<void> {
    return new Promise((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()))
    })
  }

  return { privateKey, publicJwk, server, url, createJwt, close }
}
