# specifiy a base image
FROM node:alpine

WORKDIR /usr/app

#install some dependa's
COPY ./package.json ./
RUN npm install
COPY ./ ./

#default command
CMD ["npm", "start"]