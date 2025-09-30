FROM node:20-alpine
WORKDIR /app 
#so its basically like cd app :apurbo
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["sh", "-c", "node index.js>server.log 2>&1"]
