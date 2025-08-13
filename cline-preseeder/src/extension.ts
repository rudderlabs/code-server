import * as vscode from "vscode"

export function activate(context: vscode.ExtensionContext) {
  console.log("Cline Preseeder: Extension activated")

  // Run immediately on activation
  preseedAnthropicApiKey(context)
}

async function preseedAnthropicApiKey(context: vscode.ExtensionContext) {
  try {
    // Read the API key from environment variables
    const apiKey = process.env.ANTHROPIC_API_KEY

    if (!apiKey) {
      console.log("Cline Preseeder: ANTHROPIC_API_KEY environment variable not found")
      vscode.window.showWarningMessage("Cline Preseeder: ANTHROPIC_API_KEY environment variable not set")
      return
    }

    // Store the API key using VS Code's secrets API
    await context.secrets.store("apiKey", apiKey)
    console.log("Cline Preseeder: Successfully stored API key in secrets")

    const clineExt = vscode.extensions.getExtension("saoudrizwan.claude-dev")
    if (clineExt) {
      await clineExt.activate()
    }

    // Set the API provider configuration for Cline
    const config = vscode.workspace.getConfiguration()
    await config.update("cline.apiProvider", "anthropic", vscode.ConfigurationTarget.Global)
    console.log("Cline Preseeder: Successfully set API provider to anthropic")

    // Show success notification
    vscode.window.showInformationMessage("Cline Preseeder: API key successfully configured for Cline extension")
  } catch (error) {
    console.error("Cline Preseeder: Error storing API key:", error)
    vscode.window.showErrorMessage(
      `Cline Preseeder: Failed to store API key - ${error instanceof Error ? error.message : "Unknown error"}`,
    )
  }
}

export function deactivate() {
  console.log("Cline Preseeder: Extension deactivated")
}
