FROM node:slim

COPY ./dist /root/app

ENV TARGET=prod

WORKDIR /root/app

ENTRYPOINT [ "sh", "-c", "node main.js" ]

EXPOSE 3000