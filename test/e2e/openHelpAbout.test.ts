import { describe, test, expect } from "./baseFixture"

describe("Open Help > About", ["--disable-workspace-trust"], {}, () => {
  test("should see code-server version in about dialog", async ({ codeServerPage }) => {
    // Open using the menu.
    await codeServerPage.navigateMenus(["Help", "About"])

    // The release build used in CI is produced with VERSION=0.0.0
    // (see .github/workflows/build-vscode.yaml). Matching the source-tree
    // `version` from src/node/constants would fail because that resolves to
    // package.json's value (e.g. "1.19.0"), not the build's "0.0.0". What this
    // test actually verifies is that the code-server-specific About text added
    // by integration.diff is rendered, so match the "code-server:" prefix and
    // require *some* version follows it.
    const element = await codeServerPage.page.waitForSelector(`div[role="dialog"] >> text=/code-server:\\s+\\S+/`)
    expect(element).not.toBeNull()
  })
})
