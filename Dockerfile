FROM node:14.4.0-alpine3.10

ENV HOST=$HOST \
    PORT=$PORT \

EXPOSE $PORT

RUN apk add --update npm
RUN mkdir -p /usr/share/app
WORKDIR /usr/share/app

COPY . .



