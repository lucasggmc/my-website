FROM node:18.17.0
WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]