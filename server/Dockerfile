FROM node:12-alpine

ADD package.json /temp/package.json

RUN rm -rf dist

RUN cd /temp && npm install -q

RUN npm dedupe

ADD . /src
RUN rm -rf /src/node_modules && cp -a /temp/node_modules /src/

WORKDIR /src

RUN npm run-script build

EXPOSE 4000

CMD ["node", "build/app.js"]

