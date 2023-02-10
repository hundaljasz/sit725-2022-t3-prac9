FROM node:16-alpine
WORKDIR /sit725-2022-t3-prac9
COPY . .
EXPOSE 8080
RUN npm install
CMD [ "npm", "start" ]