import { logger } from "@coder/logger"
import * as express from "express"
import { CookieKeys, HttpCode, HttpError } from "../../common/http"
import { getCookieDomain } from "../http"
import { isJwtAuthEnabled, validateJwt } from "../jwt"
import { createSession } from "../sessionStore"
import { sanitizeString } from "../util"

export const router = express.Router()

router.get("/", async (req, res, next) => {
  const token = sanitizeString(req.query.token)
  if (!token || !isJwtAuthEnabled()) {
    return next()
  }

  try {
    await validateJwt(token)
  } catch (error: unknown) {
    logger.debug("JWT validation failed")
    throw new HttpError("Unauthorized", HttpCode.Unauthorized)
  }

  const sessionToken = createSession()
  const host = req.headers.host || "localhost"
  const basePath = req.args["abs-proxy-base-path"]

  res.cookie(CookieKeys.Session, sessionToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: basePath ? `${basePath}/` : "/",
    domain: getCookieDomain(host, req.args["proxy-domain"]),
  })

  res.redirect(302, req.path)
})
