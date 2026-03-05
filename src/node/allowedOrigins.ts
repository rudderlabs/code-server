let origins: string[] | undefined
let hosts: string[] | undefined

function parse(): string[] {
  const raw = process.env.CS_ALLOWED_ORIGINS
  if (!raw) return []
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      try {
        new URL(s)
        return s
      } catch {
        throw new Error(`CS_ALLOWED_ORIGINS: invalid URL "${s}"`)
      }
    })
}

/** Returns the list of allowed origins parsed from `CS_ALLOWED_ORIGINS`. */
export function getAllowedOrigins(): string[] {
  if (origins === undefined) origins = parse()
  return origins
}

/** Returns the host (including port) of each allowed origin. */
export function getAllowedHosts(): string[] {
  if (hosts === undefined) hosts = getAllowedOrigins().map((o) => new URL(o).host.toLowerCase())
  return hosts
}

/** Checks whether the given origin is in the allowed list. */
export function isOriginAllowed(origin: string): boolean {
  return getAllowedOrigins().includes(origin)
}
