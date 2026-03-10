import { Router } from "express"
import { CookieKeys } from "../../common/http"
import { getCookieDomain, getCookieOptions, redirect } from "../http"
import { isJwtAuthEnabled } from "../jwt"
import { deleteSession } from "../sessionStore"
import { sanitizeString } from "../util"

export const router = Router()

router.get<{}, undefined, undefined, { base?: string; to?: string }>("/", async (req, res) => {
  const host = req.headers.host || "localhost"
  const basePath = req.args["abs-proxy-base-path"]

  if (isJwtAuthEnabled()) {
    // JWT mode: invalidate server-side session and clear the httpOnly cookie.
    const cookieValue = req.cookies?.[CookieKeys.Session]
    if (cookieValue) {
      deleteSession(cookieValue)
    }
    res.clearCookie(CookieKeys.Session, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: basePath ? `${basePath}/` : "/",
      domain: getCookieDomain(host, req.args["proxy-domain"]),
    })
  } else {
    // Password mode: options must match exactly what login.ts set via getCookieOptions.
    res.clearCookie(CookieKeys.Session, getCookieOptions(req))
  }

  const to = sanitizeString(req.query.to) || "/"
  return redirect(req, res, to, { to: undefined, base: undefined, href: undefined })
})
