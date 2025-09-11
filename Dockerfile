FROM node:20-alpine
RUN apk add --no-cache git

WORKDIR /app 
#so its basically like cd app :apurbo
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "node index.js"]