From node:12.18.1-alpine as build1

WORKDIR /app

COPY ./package*.json ./
RUN npm install


COPY . .
CMD ["npm","test"]