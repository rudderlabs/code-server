import { logger } from "@coder/logger"

// Capture process start time immediately on module load
const processStartTime = Date.now()

interface RudderAnalytics {
  track(message: { userId?: string; anonymousId?: string; event: string; properties?: Record<string, unknown> }): void
  flush(callback?: (err: Error | undefined) => void): void
}

let client: RudderAnalytics | undefined

/**
 * Initialize the RudderStack client lazily.
 * Returns undefined if telemetry is disabled or not configured.
 */
function getClient(): RudderAnalytics | undefined {
  if (client) {
    return client
  }

  const writeKey = process.env.RUDDERSTACK_WRITE_KEY
  const dataPlaneUrl = process.env.RUDDERSTACK_DATA_PLANE_URL
  const telemetryEnabled = process.env.RUDDERSTACK_TELEMETRY_ENABLED

  if (telemetryEnabled?.toLowerCase() === "false") {
    return undefined
  }

  if (!writeKey || !dataPlaneUrl) {
    return undefined
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Analytics = require("@rudderstack/rudder-sdk-node")
    client = new Analytics(writeKey, {
      dataPlaneUrl,
      flushAt: 1,
      flushInterval: 5000,
    })
    return client
  } catch (error) {
    logger.warn(`Failed to initialize RudderStack client: ${error}`)
    return undefined
  }
}

/**
 * Track a session start event in RudderStack.
 * Includes load time from process start to when VS Code is ready.
 */
export function trackSessionStarted(): void {
  const analytics = getClient()
  if (!analytics) {
    return
  }

  const loadTimeMs = Date.now() - processStartTime
  const userId = process.env.USER_ID
  const workspaceId = process.env.WORKSPACE_ID || ""
  const projectId = process.env.PROJECT_ID || ""
  const sessionId = process.env.VSCODE_SESSION_ID || ""

  const identityField = userId ? { userId } : { anonymousId: "anonymous" }

  try {
    analytics.track({
      ...identityField,
      event: "ide.session_started",
      properties: {
        load_time_ms: loadTimeMs,
        workspace_id: workspaceId,
        project_id: projectId,
        session_id: sessionId,
        platform: process.platform,
        arch: process.arch,
        node_version: process.version,
      },
    })
    logger.debug(`Tracked session start (load time: ${loadTimeMs}ms)`)
  } catch (error) {
    logger.warn(`Failed to track session start: ${error}`)
  }
}

/**
 * Flush pending events and dispose the RudderStack client.
 */
export function flushAndDispose(): void {
  if (!client) {
    return
  }

  try {
    client.flush((err) => {
      if (err) {
        logger.warn(`Error flushing RudderStack events: ${err.message}`)
      }
    })
  } catch (error) {
    logger.warn(`Failed to flush RudderStack events: ${error}`)
  }

  client = undefined
}
