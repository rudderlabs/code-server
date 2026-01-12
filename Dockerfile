# Base image
FROM ubuntu:22.04@sha256:09506232a8004baa32c47d68f1e5c307d648fdd59f5e7eaa42aaf87914100db3

# Set build arguments for version and architecture
ARG TARGETARCH=amd64
ARG RUDDERSTACK_PAT

# Install Python, pip, git, curl, and wget
RUN apt-get update && \
  apt-get install -y python3.10 python3-pip git curl wget sudo && \
  apt-get clean

# Create a non-root user
RUN useradd -m -s /bin/bash codeuser

# Create project directory
RUN mkdir -p /home/codeuser/project

# Create .pb directory and siteconfig.yaml file
RUN mkdir -p /home/codeuser/.pb && \
  touch /home/codeuser/.pb/siteconfig.yaml

# Copy requirements.txt first
COPY requirements.txt .

RUN pip3 install --upgrade pip
RUN pip3 install --no-cache-dir -r requirements.txt && rm requirements.txt

COPY release-packages/* .
COPY claude.vsix /claude.vsix

# Create custom-strings.json directly in the container
RUN cat > /home/codeuser/custom-strings.json << 'EOF'
{
"WELCOME": "Welcome to {{app}}",
"LOGIN_TITLE": "{{app}} Access Portal",
"LOGIN_BELOW": "Please enter the code to continue",
"PASSWORD_PLACEHOLDER": "Enter Code",
"LOGIN_PASSWORD": "",
"LOGIN_USING_ENV_PASSWORD": "",
"LOGIN_USING_HASHED_PASSWORD": ""
}
EOF

# Download and install code-server from GitHub releases
RUN if [ "$TARGETARCH" = "arm64" ]; then \
  dpkg -i code-server_1.2.0_arm64.deb || apt-get install -f -y; \
  else \
  dpkg -i code-server_1.2.0_amd64.deb || apt-get install -f -y; \
  fi

# Switch to codeuser for extension installation and MCP setup
USER codeuser
# Install extension as codeuser
RUN code-server --install-extension /claude.vsix

WORKDIR /home/codeuser

COPY src/browser/media/copilot-welcome.html .

# Copy assets to code-server static directory (verify path matches code-server installation)
# For .deb installations, code-server is typically at /usr/lib/code-server/
USER root
RUN mkdir -p /usr/lib/code-server/src/browser/media/
COPY src/browser/media/copilot-welcome.html /usr/lib/code-server/src/browser/media/copilot-welcome.html
USER codeuser

# Clone profiles-mcp as codeuser
RUN git clone --branch v0.9.0 https://github.com/rudderlabs/profiles-mcp

# Set up the Python script
RUN echo '#!/usr/bin/env python3' > /home/codeuser/profiles-mcp/scripts/update_mcp_config.py
RUN echo "RUDDERSTACK_PAT=${RUDDERSTACK_PAT}\nIS_CLOUD_BASED=true" > /home/codeuser/profiles-mcp/.env

# Run setup as codeuser
RUN cd /home/codeuser/profiles-mcp && bash setup.sh

# Create MCP settings directory and filprofiles-qa-rudderstack-sources-manager-profiles-qa-rudderstack-sources-manager-00e
RUN mkdir -p /home/codeuser/.local/share/code-server/User/globalStorage/saoudrizwan.claude-dev/settings/
RUN echo '{"mcpServers":{ "Profiles": { "command": "/home/codeuser/profiles-mcp/scripts/start.sh", "args": [], "autoApprove": ["get_existing_connections","search_profiles_docs","initialize_warehouse_connection","run_query","input_table_suggestions","describe_table","get_profiles_output_details","setup_new_profiles_project","evaluate_eligible_user_filters","validate_propensity_model_config"] }}}' > /home/codeuser/.local/share/code-server/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json

# Create VS Code settings for sidebar layout (file explorer left, Cline right in secondary sidebar)
RUN echo '{"workbench.sideBar.location":"left","workbench.secondarySideBar.defaultVisibility":"visible"}' > /home/codeuser/.local/share/code-server/User/settings.json

# Set proper ownership and permissions
USER root
RUN chown -R codeuser:codeuser /home/codeuser
RUN chmod 755 /home/codeuser/project
RUN chmod 644 /home/codeuser/.pb/siteconfig.yaml
RUN chmod 755 /home/codeuser/.pb
RUN chmod 755 /home/codeuser/custom-strings.json

# Switch back to codeuser
USER codeuser
RUN mkdir -p /home/codeuser/Documents/Cline/Rules
COPY --chown=codeuser:codeuser clinerules.md /home/codeuser/Documents/Cline/Rules/clinerules.md

# Add terminal logging to .bashrc
RUN cat >> /home/codeuser/.bashrc << 'EOF'
LOG_DIR="$HOME/terminal_logs"
mkdir -p "$LOG_DIR"

# Command logging with timestamps
PROMPT_COMMAND='__log_command'

__log_command() {
local last_cmd=$(history 1 | sed 's/^[ ]*[0-9]\+[ ]*//')
if [ -n "$last_cmd" ]; then
echo "[$(date '+%Y-%m-%d %H:%M:%S')] $last_cmd" >> "$LOG_DIR/commands.log"
fi
}
EOF

WORKDIR /home/codeuser/project

EXPOSE 8080
