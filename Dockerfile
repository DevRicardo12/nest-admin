FROM node:16.14

#Directorio
WORKDIR /app

#Copiar package dentro de /app
COPY package.json .
RUN npm install
#copiar todo
COPY . .
CMD npm run start:dev

