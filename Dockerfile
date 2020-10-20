FROM node:slim

COPY ./ /root/app

ENV TARGET=prod

WORKDIR /root/app

RUN yarn --production

ENTRYPOINT [ "sh", "-c", "node ./dist/main.js" ]

EXPOSE 3000