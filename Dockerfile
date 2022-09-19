FROM node:10.15.1

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY . /app
RUN yarn install

CMD ["yarn", "start"]
