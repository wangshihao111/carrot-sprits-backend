FROM node:14.14-alpine

COPY . /home/app

ENV TARGET=prod

RUN npm install

WORKDIR /home/app

CMD [ "npm run start" ]

EXPOSE 3000