FROM node:10

WORKDIR /app

EXPOSE 5000

COPY . /app
RUN npm run install:all

CMD ["npm","run","server"]
