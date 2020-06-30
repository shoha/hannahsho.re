FROM node:14.4.0-stretch as base

FROM base as build
COPY . /app
WORKDIR /app
RUN yarn
CMD yarn next start
