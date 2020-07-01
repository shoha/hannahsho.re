FROM node:14.4.0-stretch as base

FROM base as build
COPY . /app
WORKDIR /app
RUN yarn
RUN yarn build
CMD yarn start
