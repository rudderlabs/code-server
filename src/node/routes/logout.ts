import { Router } from "express"
import { CookieKeys } from "../../common/http"
import { getCookieDomain, getCookieOptions, redirect } from "../http"
import { sanitizeString } from "../util"

export const router = Router()

router.get<{}, undefined, undefined, { base?: string; to?: string }>("/", async (req, res) => {
  res.clearCookie(CookieKeys.Session, getCookieOptions(req))

  // Also clear JWT-bootstrapped session cookie (different options: httpOnly).
  const host = req.headers.host || "localhost"
  const basePath = req.args["abs-proxy-base-path"]
  res.clearCookie(CookieKeys.Session, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: basePath ? `${basePath}/` : "/",
    domain: getCookieDomain(host, req.args["proxy-domain"]),
  })

  const to = sanitizeString(req.query.to) || "/"
  return redirect(req, res, to, { to: undefined, base: undefined, href: undefined })
})
