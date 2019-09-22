FROM node:10-16.0-strech

LABEL MAINTAINER="Mahdi Imani"

WORKDIR /usr/src/app

USER node

COPY . .

EXPOSE 3000 9229 9200

CMD [ "node --inspect=0.0.0.0:9229 index.js" ]