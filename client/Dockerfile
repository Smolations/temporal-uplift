# docker build -t tu-client:next .
FROM node:16-slim AS os

LABEL version="1.0"
#LABEL description=""
#LABEL maintainer = ["@gmail.com", ...]

WORKDIR /usr/src/app

COPY package*.json ./

ENV APT_PACKAGES="curl procps" \
    NPM_PACKAGES="nodemon"

RUN apt update -y && \
  apt upgrade -y && \
  apt install -y $APT_PACKAGES && \
  npm install -g $NPM_PACKAGES && \
  npm install && \
  npm cache clean --force && \
  apt autoremove -y

COPY . ./

EXPOSE 8080

CMD ["npm", "start"]
