import { promises as fs } from "fs"
import * as path from "path"
import { describe, test, expect } from "./baseFixture"

describe("Webviews", ["--disable-workspace-trust"], {}, () => {
  test("should preview a Markdown file", async ({ codeServerPage }) => {
    // Create Markdown file
    const heading = "Hello world"
    const dir = await codeServerPage.workspaceDir
    const file = path.join(dir, "text.md")
    await fs.writeFile(file, `# ${heading}`)
    await codeServerPage.openFile(file)

    // Wait for the markdown extension to finish activating before running its
    // commands. openFile() only opens the file; the language-features extension
    // activates async on top, and our Command Palette typing can race ahead of
    // command registration -- in which case "Markdown: Open Preview to the
    // Side" silently falls back to a no-op and the iframe never renders. The
    // workbench surfaces an "Activating Extensions" status-bar item while
    // activations are in flight; wait for that to go away.
    await codeServerPage.page.waitForSelector("text=Activating Extensions", { state: "hidden", timeout: 30000 })

    // Open Preview
    await codeServerPage.executeCommandViaMenus("Markdown: Open Preview to the Side")
    // Wait for the iframe to open and load
    await codeServerPage.waitForTab(`Preview ${file}`)

    // It's an iframe within an iframe
    // so we have to do .frameLocator twice. The default 5s expect timeout is
    // not enough in CI for the outer webview iframe to flip to `.ready` and
    // the inner frame to render the markdown -- bump it.
    await expect(
      codeServerPage.page.frameLocator("iframe.webview.ready").frameLocator("#active-frame").getByText("Hello world"),
    ).toBeVisible({ timeout: 30000 })
  })
})
