FROM node:22-bookworm

RUN apt-get update && \
    apt-get install jq -y

RUN npm -g install ngrok

WORKDIR /app
