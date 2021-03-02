FROM node:14.15.1

ADD ./elasticsearch.yml /usr/share/elasticsearch/config/

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
