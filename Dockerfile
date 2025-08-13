# Base image
FROM ubuntu:22.04

# Set build arguments for version and architecture
ARG VERSION=v4.9.1
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

# Install RudderStack Profiles CLI (assuming pip install)
RUN pip3 install profiles-rudderstack

COPY release-packages/* .

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
        dpkg -i code-server_0.1.0-alpha.6_arm64.deb || apt-get install -f -y; \
    else \
        dpkg -i code-server_0.1.0-alpha.6_amd64.deb || apt-get install -f -y; \
    fi

# Switch to codeuser for extension installation and MCP setup
USER codeuser
WORKDIR /home/codeuser

# Copy the pre-built extension (much faster!)
COPY cline-preseeder.vsix /tmp/cline-preseeder.vsix

# Install Cline extension and pre-built preseeder extension
RUN code-server --install-extension saoudrizwan.claude-dev
RUN code-server --install-extension /tmp/cline-preseeder.vsix

# Clone profiles-mcp as codeuser
RUN git clone https://github.com/rudderlabs/profiles-mcp

# Set up the Python script
RUN echo '#!/usr/bin/env python3' > /home/codeuser/profiles-mcp/scripts/update_mcp_config.py 
RUN echo "RUDDERSTACK_PAT=${RUDDERSTACK_PAT}" > /home/codeuser/profiles-mcp/.env

# Run setup as codeuser
RUN cd /home/codeuser/profiles-mcp && bash setup.sh

# Create MCP settings directory and file
RUN mkdir -p /home/codeuser/.local/share/code-server/User/globalStorage/saoudrizwan.claude-dev/settings/
RUN echo '{"mcpServers":{ "Profiles": { "command": "/home/codeuser/profiles-mcp/scripts/start.sh", "args": [] }}}' > /home/codeuser/.local/share/code-server/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json 

# Set proper ownership and permissions
USER root
RUN chown -R codeuser:codeuser /home/codeuser
RUN chmod 755 /home/codeuser/project
RUN chmod 644 /home/codeuser/.pb/siteconfig.yaml
RUN chmod 755 /home/codeuser/.pb
RUN chmod 755 /home/codeuser/custom-strings.json

# Clean up
RUN rm -f /tmp/cline-preseeder.vsix

# Switch back to codeuser
USER codeuser
WORKDIR /home/codeuser/project

EXPOSE 8080