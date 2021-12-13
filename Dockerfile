FROM node
WORKDIR /docker
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "app/server.js"]