
## Description

A simple auth api using nestjs, passport, jwks & jwt.

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
```

## Run

```bash
# curl request to get user details (email,name etc)
$ curl http://localhost:3000/user/profile -H "Authorization: Bearer <YOUT GOOGLE OAUTH JWT>"
```


