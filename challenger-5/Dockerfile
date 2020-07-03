FROM node:12.18.2-alpine

RUN apk add --no-cache bash

WORKDIR /usr/src/app

RUN npm i -g @nestjs/cli@7.2.0

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

