# dockerfile for the server
FROM node:21-alpine 

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

CMD ["npm","run","start"]