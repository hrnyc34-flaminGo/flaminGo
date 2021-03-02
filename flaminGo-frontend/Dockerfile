FROM node:latest

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -legacy-peer-deps

COPY . .

EXPOSE 3000


CMD ["node", "server/index.js"]