import { createRemoteJWKSet, jwtVerify } from "jose"

const JWKS_URL = process.env.JWKS_URL
const JWT_ISSUER = process.env.JWT_ISSUER
const SESSION_ID = process.env.SESSION_ID
const WORKSPACE_ID = process.env.WORKSPACE_ID

const jwks = JWKS_URL ? createRemoteJWKSet(new URL(JWKS_URL)) : undefined

const consumedJTIs = new Set<string>()

export function isJwtAuthEnabled(): boolean {
  return !!jwks
}

export async function validateJwt(token: string): Promise<void> {
  if (!jwks) {
    throw new Error("JWT auth not configured")
  }

  const { payload } = await jwtVerify(token, jwks, {
    audience: "urn:rudderstack:service:code-server",
    issuer: JWT_ISSUER,
    clockTolerance: 5,
    algorithms: ["EdDSA"],
  })

  if (!payload.jti) {
    throw new Error("missing jti")
  }
  if (payload.sessionId !== SESSION_ID) {
    throw new Error("sessionId mismatch")
  }
  if (payload.workspaceId !== WORKSPACE_ID) {
    throw new Error("workspaceId mismatch")
  }
  if (consumedJTIs.has(payload.jti)) {
    throw new Error("jti already consumed")
  }

  consumedJTIs.add(payload.jti)
}
