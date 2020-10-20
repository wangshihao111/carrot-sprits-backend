FROM node:slim

COPY ./ /root/app

ENV TARGET=prod

WORKDIR /root/app

RUN yarn --production


ENTRYPOINT [ "sh", "-c", "yarn start" ]

EXPOSE 3000