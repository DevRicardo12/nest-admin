## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Create Dokerfile
```
FROM node:16.14

# Directorio
WORKDIR /app

# Copiar package dentro de /app
COPY package.json .
RUN npm install
# copiar todo
COPY . .
CMD npm run start:dev
```

## Create docker-compose.yml

## RUN docker-compose
docker-compose up -d


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
