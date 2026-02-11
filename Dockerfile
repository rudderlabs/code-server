# Base image
FROM ubuntu:22.04@sha256:09506232a8004baa32c47d68f1e5c307d648fdd59f5e7eaa42aaf87914100db3

ARG TARGETARCH=amd64
ARG RUDDERSTACK_PAT

# Install required packages + lshell
RUN apt-get update && \
  apt-get install -y python3.10 python3-pip git curl wget sudo && \
  pip3 install --no-cache-dir lshell && \
  apt-get clean && rm -rf /var/lib/apt/lists/*

# Create restricted user with lshell as login shell
RUN useradd -m -s /usr/local/bin/lshell codeuser

# Configure lshell restrictions
RUN mkdir -p /etc/lshell && \
cat > /etc/lshell.conf << 'EOF'
[global]
logpath = /var/log/lshell/
loglevel = 1

[codeuser]
allowed = ['ls','cat','echo','pwd','exit']
forbidden = ['bash','sh','sudo','su','python','pip','apt','apt-get','wget','curl']
warning_counter = 2
aliases = {}
intro = "Restricted Environment - Limited Commands Only"
EOF

RUN mkdir -p /var/log/lshell && chmod 755 /var/log/lshell

# Create project directory
RUN mkdir -p /home/codeuser/project
RUN mkdir -p /home/codeuser/.pb && touch /home/codeuser/.pb/siteconfig.yaml

COPY requirements.txt .
RUN pip3 install --upgrade pip && \
    pip3 install --no-cache-dir -r requirements.txt && \
    rm requirements.txt

COPY release-packages/* .
COPY claude.vsix /claude.vsix

# Custom strings
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

ARG CODE_SERVER_VERSION=1.7.2
RUN dpkg -i code-server_*_${TARGETARCH}.deb || apt-get install -f -y

# Switch to codeuser
USER codeuser
RUN code-server --install-extension /claude.vsix

WORKDIR /home/codeuser

COPY src/browser/media/copilot-welcome.html .

USER root
RUN mkdir -p /usr/lib/code-server/src/browser/media/
COPY src/browser/media/copilot-welcome.html /usr/lib/code-server/src/browser/media/copilot-welcome.html
USER codeuser

RUN git clone --branch v1.2.0 https://github.com/rudderlabs/profiles-mcp

RUN echo '#!/usr/bin/env python3' > /home/codeuser/profiles-mcp/scripts/update_mcp_config.py
RUN echo "RUDDERSTACK_PAT=${RUDDERSTACK_PAT}\nIS_CLOUD_BASED=true" > /home/codeuser/profiles-mcp/.env

RUN cd /home/codeuser/profiles-mcp && bash setup.sh

RUN mkdir -p /home/codeuser/.local/share/code-server/User/globalStorage/saoudrizwan.claude-dev/settings/
RUN echo '{"mcpServers":{ "Profiles": { "command": "/home/codeuser/profiles-mcp/scripts/start.sh", "args": [], "inheritEnv": ["RUDDERSTACK_PAT","RAG_ADMIN_USERNAME","RAG_ADMIN_PASSWORD","RETRIEVAL_API_URL","IS_CLOUD_BASED"], "autoApprove": ["get_existing_connections","search_profiles_docs","initialize_warehouse_connection","run_query","input_table_suggestions","describe_table","get_profiles_output_details","setup_new_profiles_project","evaluate_eligible_user_filters","validate_propensity_model_config"] }}}' > /home/codeuser/.local/share/code-server/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json

USER root
COPY --chown=codeuser:codeuser settings.json /home/codeuser/.local/share/code-server/User/settings.json
RUN chown -R codeuser:codeuser /home/codeuser

USER codeuser
RUN mkdir -p /home/codeuser/Documents/Cline/Rules
COPY --chown=codeuser:codeuser clinerules.md /home/codeuser/Documents/Cline/Rules/clinerules.md

WORKDIR /home/codeuser/project

EXPOSE 8080