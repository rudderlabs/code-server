import * as crypto from "crypto"

const sessions = new Set<string>()

export function createSession(): string {
  const token = crypto.randomBytes(32).toString("hex")
  sessions.add(token)
  return token
}

export function isValidSession(token: string): boolean {
  return sessions.has(token)
}
