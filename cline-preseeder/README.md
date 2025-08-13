# Cline API Key Preseeder

This VS Code extension automatically pre-seeds the Anthropic API key for the Cline extension using environment variables.

## Purpose

In Docker-based or automated development environments, manually entering API keys through the VS Code UI is impractical. This extension solves that problem by:

1. Reading the `ANTHROPIC_API_KEY` from environment variables
2. Storing it securely using VS Code's secrets API
3. Configuring the Cline extension to use Anthropic as the API provider

## Usage

1. Set the `ANTHROPIC_API_KEY` environment variable in your container/environment
2. Install this extension alongside the Cline extension
3. The extension will automatically configure the API key on VS Code startup

## Requirements

- VS Code 1.70.0 or later
- Environment variable `ANTHROPIC_API_KEY` must be set

## Installation

This extension is designed to be built and installed as part of a Docker container setup. It activates on `onStartupFinished` to ensure it runs before the Cline extension needs the API key.

## Error Handling

- Gracefully handles missing environment variables with user notifications
- Provides detailed console logging for troubleshooting
- Shows success/failure messages via VS Code notifications