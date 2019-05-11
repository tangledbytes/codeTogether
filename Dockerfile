FROM node:alpine

WORKDIR /app

COPY ./package.json ./

RUN yarn install

COPY ./ ./

RUN cd client && yarn install

CMD [ "yarn", "run", "server" ]