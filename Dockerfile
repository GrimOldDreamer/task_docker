FROM node:alpine

MAINTAINER Volodymyr Shternov <grimolddreamer@gmail.com>

ARG HOST="0.0.0.0"

ENV HOST=$HOST \
    PORT=$PORT 

EXPOSE $PORT

RUN mkdir -p /usr/share/app
WORKDIR /usr/share/app
COPY . .

RUN npm install express --save && npm install --save node-persist

VOLUME /usr/share/app

CMD [ "node", "app.js" ]
