FROM node:alpine

ENV HOST=$HOST \
    PORT=$PORT 

EXPOSE $PORT

RUN mkdir -p /usr/share/app
WORKDIR /usr/share/app
COPY . .

RUN npm install express --save && npm install --save node-persist

CMD [ "node", "app.js" ]
