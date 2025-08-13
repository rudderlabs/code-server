#!/bin/bash
set -e

echo "Building cline-preseeder extension..."

# Navigate to extension directory
cd cline-preseeder

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Compile TypeScript
echo "Compiling TypeScript..."
npm run compile

# Package the extension
echo "Packaging extension..."
npx @vscode/vsce package --allow-missing-repository

# Move the .vsix file to a predictable location
echo "Moving package to project root..."
mv *.vsix ../cline-preseeder.vsix

echo "Extension built successfully: cline-preseeder.vsix" 