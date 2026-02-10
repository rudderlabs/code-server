# Base image
FROM ubuntu:22.04@sha256:09506232a8004baa32c47d68f1e5c307d648fdd59f5e7eaa42aaf87914100db3

# Set build arguments for version and architecture
ARG TARGETARCH=amd64
ARG RUDDERSTACK_PAT

# Install Python, pip, git, curl, and wget
RUN apt-get update && \
  apt-get install -y python3.10 python3-pip git curl wget sudo && \
  apt-get clean

# Copy requirements.txt first
COPY requirements.txt .

RUN pip3 install --upgrade pip
RUN pip3 install --no-cache-dir -r requirements.txt && rm requirements.txt

# ============================================
# RESTRICTED SHELL SECURITY (lshell)
# ============================================

# Install lshell FIRST (PyPI package name is 'limited-shell')
RUN pip3 install limited-shell==0.10.1 || (echo "FATAL: lshell installation failed" && exit 1)

# Verify lshell is installed
RUN test -f /usr/local/bin/lshell || (echo "FATAL: lshell not found" && exit 1)

# Create log directory with proper permissions
RUN mkdir -p /var/log/lshell && chmod 755 /var/log/lshell

# Copy lshell configuration from external file
COPY config/lshell.conf /etc/lshell.conf

# Validate lshell configuration syntax
RUN python3 -c "import configparser; c = configparser.ConfigParser(); c.read('/etc/lshell.conf')" || (echo "FATAL: Invalid lshell.conf syntax" && exit 1)

# Set proper permissions on config file
RUN chmod 644 /etc/lshell.conf

# ============================================
# NOW create user with lshell (shell exists now)
# ============================================

# Create a non-root user with RESTRICTED SHELL (lshell)
RUN useradd -m -s /usr/local/bin/lshell codeuser

# Fix log directory ownership for codeuser
RUN chown -R codeuser:codeuser /var/log/lshell/

# Create project directory
RUN mkdir -p /home/codeuser/project

# Create .pb directory and siteconfig.yaml file
RUN mkdir -p /home/codeuser/.pb && \
  touch /home/codeuser/.pb/siteconfig.yaml

# ============================================

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

# Install code-server from .deb package
# x-release-please-start-version
ARG CODE_SERVER_VERSION=1.7.2
# x-release-please-end
RUN dpkg -i code-server_*_${TARGETARCH}.deb || apt-get install -f -y

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
RUN git clone --branch v1.2.0 https://github.com/rudderlabs/profiles-mcp

# Set up the Python script
RUN echo '#!/usr/bin/env python3' > /home/codeuser/profiles-mcp/scripts/update_mcp_config.py
RUN echo "RUDDERSTACK_PAT=${RUDDERSTACK_PAT}\nIS_CLOUD_BASED=true" > /home/codeuser/profiles-mcp/.env

# Run setup as codeuser
RUN cd /home/codeuser/profiles-mcp && bash setup.sh

# Create MCP settings directory and filprofiles-qa-rudderstack-sources-manager-profiles-qa-rudderstack-sources-manager-00e
RUN mkdir -p /home/codeuser/.local/share/code-server/User/globalStorage/saoudrizwan.claude-dev/settings/
RUN echo '{"mcpServers":{ "Profiles": { "command": "/home/codeuser/profiles-mcp/scripts/start.sh", "args": [], "inheritEnv": ["RUDDERSTACK_PAT","RAG_ADMIN_USERNAME","RAG_ADMIN_PASSWORD","RETRIEVAL_API_URL","IS_CLOUD_BASED"], "autoApprove": ["get_existing_connections","search_profiles_docs","initialize_warehouse_connection","run_query","input_table_suggestions","describe_table","get_profiles_output_details","setup_new_profiles_project","evaluate_eligible_user_filters","validate_propensity_model_config"] }}}' > /home/codeuser/.local/share/code-server/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json

# Copy VS Code settings for sidebar layout and theme customizations
# Set proper ownership and permissions
USER root
COPY --chown=codeuser:codeuser settings.json /home/codeuser/.local/share/code-server/User/settings.json
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
