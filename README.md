# Desafio 01 - Conceitos do Node.js - Rocketseat

Projeto Desafio para demonstrar os conceitos básico de Node.js em uma API com Express.

[Clique aqui](desafio.md) para visualizar os requisitos do projeto.

<br>

## Instalação

1. No diretório do projeto

```bash
npm install
```

### Executando os Testes

```bash
npm run test
```

## Executando o projeto

### Em desenvolvimento

```bash
nodemon
```

### Em modo de produção

```bash
npm start
```

### Acessando o projeto:

```http
http://localhost:3000
```

## Rotas

| Verbo  | Recurso         |
| ------ | --------------- |
| GET    | /               |
| GET    | /users          |
| GET    | /users/:id      |
| POST   | /users          |
| GET    | /todos          |
| GET    | /todos/:id      |
| POST   | /todos          |
| PUT    | /todos/:id      |
| PATCH  | /todos/:id/done |
| DELETE | /todos/:id      |
