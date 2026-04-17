import * as crypto from "crypto"
import * as http from "http"

interface JWTPayload {
  [key: string]: unknown
  iss?: string
  sub?: string
  aud?: string | string[]
  jti?: string
  nbf?: number
  exp?: number
  iat?: number
}

interface JWTVerifyResult {
  payload: JWTPayload
  protectedHeader: { alg: string; kid?: string }
}

interface JWTVerifyOptions {
  audience?: string
  issuer?: string
  clockTolerance?: number
  algorithms?: string[]
}

type GetKeyFunction = (protectedHeader: { kid?: string }, token: unknown) => Promise<crypto.KeyObject>

function base64urlDecode(str: string): Buffer {
  return Buffer.from(str, "base64url")
}

export function createRemoteJWKSet(url: URL): GetKeyFunction {
  const cachedKeys: Record<string, crypto.KeyObject> = {}

  return async (protectedHeader: { kid?: string }) => {
    if (!protectedHeader.kid || !cachedKeys[protectedHeader.kid]) {
      const data = await new Promise<string>((resolve, reject) => {
        http.get(url.toString(), (res) => {
          let body = ""
          res.on("data", (chunk: string) => (body += chunk))
          res.on("end", () => resolve(body))
          res.on("error", reject)
        }).on("error", reject)
      })

      const jwks = JSON.parse(data)
      for (const key of jwks.keys) {
        if (key.kid) {
          cachedKeys[key.kid] = crypto.createPublicKey({ key, format: "jwk" })
        }
      }
    }

    const kid = protectedHeader.kid
    if (!kid || !cachedKeys[kid]) {
      throw new Error(`Unknown kid: ${kid}`)
    }
    return cachedKeys[kid]
  }
}

export async function jwtVerify(
  token: string,
  getKey: GetKeyFunction,
  options?: JWTVerifyOptions,
): Promise<JWTVerifyResult> {
  const parts = token.split(".")
  if (parts.length !== 3) {
    throw new Error("Invalid JWT format")
  }

  const [headerB64, payloadB64, signatureB64] = parts
  const header = JSON.parse(base64urlDecode(headerB64).toString())
  const payload: JWTPayload = JSON.parse(base64urlDecode(payloadB64).toString())

  if (options?.algorithms && !options.algorithms.includes(header.alg)) {
    throw new Error(`Unsupported algorithm: ${header.alg}`)
  }

  const key = await getKey(header, token)
  const signingInput = `${headerB64}.${payloadB64}`
  const signature = base64urlDecode(signatureB64)
  const isValid = crypto.verify(null, Buffer.from(signingInput), key, signature)

  if (!isValid) {
    throw new Error("Invalid signature")
  }

  const now = Math.floor(Date.now() / 1000)
  const clockTolerance = options?.clockTolerance ?? 0

  if (payload.exp !== undefined && payload.exp + clockTolerance < now) {
    throw new Error("JWT expired")
  }

  if (options?.audience) {
    const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud]
    if (!aud.includes(options.audience)) {
      throw new Error(`Audience mismatch: expected ${options.audience}`)
    }
  }

  if (options?.issuer && payload.iss !== options.issuer) {
    throw new Error(`Issuer mismatch: expected ${options.issuer}`)
  }

  return { payload, protectedHeader: header }
}
