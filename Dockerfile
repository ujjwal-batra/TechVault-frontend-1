FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock ./
RUN yarn install

COPY . ./

CMD ["npm", "start"]