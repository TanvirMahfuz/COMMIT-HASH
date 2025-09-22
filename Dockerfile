FROM node:20-alpine
WORKDIR /app 
#so its basically like cd app :apurbo
COPY . .
RUN npm install

EXPOSE 3000
CMD ["sh", "-c", "node index.js"]