FROM node:alpine

RUN apk add build-base

RUN apk add python3

WORKDIR /app

COPY ./package.json ./

COPY ./cr ./cr

RUN yarn install

COPY ./ ./

RUN cd client && yarn install

CMD [ "yarn", "run", "server" ]