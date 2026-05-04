# syntax=docker/dockerfile:1.4
# Base image
FROM ubuntu:22.04@sha256:09506232a8004baa32c47d68f1e5c307d648fdd59f5e7eaa42aaf87914100db3

# Set build arguments for version and architecture
ARG TARGETARCH=amd64

# Install Python, pip, git, curl, and wget
RUN apt-get update && \
  apt-get install -y python3.10 python3-pip git curl wget sudo && \
  apt-get clean


# ============================================
# RESTRICTED SHELL SECURITY (lshell)
# ============================================
# lshell (limited-shell) restricts terminal commands to a whitelist.
# Cline bypasses shell integration by using node-pty to spawn lshell directly.
# See config/lshell.conf for the whitelist configuration.
RUN pip3 install limited-shell==0.10.1 || (echo "FATAL: lshell installation failed" && exit 1)
RUN test -f /usr/local/bin/lshell || (echo "FATAL: lshell not found" && exit 1)
RUN mkdir -p /var/log/lshell && chmod 755 /var/log/lshell
COPY config/lshell.conf /etc/lshell.conf
RUN python3 -c "import configparser; c = configparser.ConfigParser(); c.read('/etc/lshell.conf')" \
    || (echo "FATAL: Invalid lshell.conf syntax" && exit 1)
RUN chmod 644 /etc/lshell.conf

# ============================================
# Create non-root user
# ============================================
RUN useradd -m -u 1000 -s /usr/local/bin/lshell codeuser

# Copy requirements.txt first
COPY requirements.txt .

RUN pip3 install --upgrade pip
RUN --mount=type=secret,id=PYPI_CONNECTION_STRING \
    pip3 install --no-cache-dir \
      -i https://$(cat /run/secrets/PYPI_CONNECTION_STRING) \
      -r requirements.txt && rm requirements.txt

# Create project directory
RUN mkdir -p /home/codeuser/project

# Create .pb directory and siteconfig.yaml file
RUN mkdir -p /home/codeuser/.pb && \
  touch /home/codeuser/.pb/siteconfig.yaml

# ============================================

COPY release-packages/* /tmp/
COPY claude.vsix /tmp/claude.vsix

COPY custom-strings.json /home/codeuser/custom-strings.json

# Install code-server from .deb package
# x-release-please-start-version
ARG CODE_SERVER_VERSION=1.16.1
# x-release-please-end
RUN (dpkg -i /tmp/code-server_*_${TARGETARCH}.deb || apt-get install -f -y) && \
  rm -f /tmp/code-server_*.deb /tmp/code-server*.rpm /tmp/code-server*.tar.gz

# Install landrun (Landlock sandbox CLI)
ARG LANDRUN_VERSION=v0.1.14
RUN curl -fsSL "https://github.com/Zouuup/landrun/releases/download/${LANDRUN_VERSION}/landrun-linux-amd64" \
      -o /usr/local/bin/landrun && \
    chmod 755 /usr/local/bin/landrun

# Switch to codeuser for extension installation and MCP setup
USER codeuser
RUN code-server --install-extension /tmp/claude.vsix

WORKDIR /home/codeuser

COPY src/browser/media/copilot-welcome.html .

# Copy assets to code-server static directory (verify path matches code-server installation)
# For .deb installations, code-server is typically at /usr/lib/code-server/
USER root
RUN rm -f /tmp/claude.vsix
RUN mkdir -p /usr/lib/code-server/src/browser/media/
COPY src/browser/media/copilot-welcome.html /usr/lib/code-server/src/browser/media/copilot-welcome.html
USER codeuser

# Clone profiles-mcp as codeuser
RUN git clone --branch v1.4.0 https://github.com/rudderlabs/profiles-mcp

# Set up the Python script
RUN echo '#!/usr/bin/env python3' > /home/codeuser/profiles-mcp/scripts/update_mcp_config.py
RUN echo "IS_CLOUD_BASED=true\nUSE_PB_QUERY=" > /home/codeuser/profiles-mcp/.env

# Run setup as codeuser
RUN cd /home/codeuser/profiles-mcp && bash setup.sh

# Create MCP settings directory and filprofiles-qa-rudderstack-sources-manager-profiles-qa-rudderstack-sources-manager-00e
RUN mkdir -p /home/codeuser/.local/share/code-server/User/globalStorage/saoudrizwan.claude-dev/settings/
RUN echo '{"mcpServers":{ "Profiles": { "command": "/home/codeuser/profiles-mcp/scripts/start.sh", "args": [], "env": { "SHELL": "/bin/bash" }, "inheritEnv": ["RAG_ADMIN_USERNAME","RAG_ADMIN_PASSWORD","RETRIEVAL_API_URL","IS_CLOUD_BASED", "USE_PB_QUERY"], "autoApprove": ["get_existing_connections","search_profiles_docs","initialize_warehouse_connection","run_query","input_table_suggestions","describe_table","get_profiles_output_details","setup_new_profiles_project","evaluate_eligible_user_filters","validate_propensity_model_config"] }}}' > /home/codeuser/.local/share/code-server/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json

# Copy VS Code settings for sidebar layout and theme customizations
# Set proper ownership and permissions
USER root
COPY --chown=codeuser:codeuser settings.json /home/codeuser/.local/share/code-server/User/settings.json

RUN echo "# /etc/shells: valid login shells" > /etc/shells && \
    echo "/usr/local/bin/lshell" >> /etc/shells && \
    chmod 644 /etc/shells && chown root:root /etc/shells

RUN chown -R codeuser:codeuser /home/codeuser
RUN chown -R codeuser:codeuser /var/log/lshell/
RUN chmod 755 /home/codeuser/project
RUN chmod 644 /home/codeuser/.pb/siteconfig.yaml
RUN chmod 755 /home/codeuser/.pb
RUN chmod 755 /home/codeuser/custom-strings.json

# Lock settings.json to root to prevent users from changing terminal profile
RUN chown root:root /home/codeuser/.local/share/code-server/User/settings.json && \
    chmod 644 /home/codeuser/.local/share/code-server/User/settings.json

# Switch back to codeuser
USER codeuser
RUN mkdir -p /home/codeuser/Documents/Cline/Rules
COPY --chown=codeuser:codeuser clinerules.md /home/codeuser/Documents/Cline/Rules/clinerules.md

# Replace default Ubuntu .bashrc with minimal configuration
COPY config/bashrc /home/codeuser/.bashrc

WORKDIR /home/codeuser/project

EXPOSE 8080
