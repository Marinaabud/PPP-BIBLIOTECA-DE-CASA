# Biblioteca Caseira - Automação de Testes API REST

Este projeto tem como objetivo automatizar os testes da API REST do sistema Biblioteca Caseira, que permite o gerenciamento de livros lidos, em andamento e na fila de espera.

![WhatsApp Image 2025-11-04 at 23 47 44](https://github.com/user-attachments/assets/e4c75bbe-5d2b-440b-9de8-d4adef0bdd15)

## Descrição
A Biblioteca Caseira é uma solução para organizar e acompanhar suas leituras, registrar livros, avaliações, status e anotações. Os testes garantem que os principais endpoints da API funcionem conforme esperado, validando regras de negócio e autenticação.

## Stack Utilizada
- **JavaScript**
- **Mocha** ([documentação](https://mochajs.org/))
- **Chai** ([documentação](https://www.chaijs.com/))
- **Supertest** ([documentação](https://github.com/visionmedia/supertest))
- Outras dependências conforme listadas no `package.json`

## Estrutura de Diretórios
```
├── src/                # Código-fonte da API
├── test/               # Testes automatizados (Mocha, Chai, Supertest)
│   ├── books.test.js   # Testes dos endpoints de livros
│   └── readers.test.js # Testes dos endpoints de leitores
├── resources/          # Documentação Swagger
├── package.json        # Dependências e scripts
└── README.md           # Este documento
```

## Endpoints Principais Testados
- `POST /api/readers/register` — Registro de leitor
- `POST /api/readers/login` — Autenticação e obtenção de token JWT
- `POST /api/books` — Adicionar livro
- `GET /api/books` — Listar livros do leitor
- `GET /api/books/{id}` — Detalhes de um livro
- `PUT /api/books/{id}` — Atualizar livro
- `DELETE /api/books/{id}` — Remover livro

## Como Executar os Testes
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a API (em outro terminal):
   ```bash
   npm start
   ```
3. Execute os testes:
   ```bash
   npm test
   ```

## Relatórios de Teste
- Os resultados dos testes são exibidos no terminal após a execução do comando `npm test`.
- Para integração com ferramentas de relatório, consulte a documentação do [Mocha](https://mochajs.org/#reporters).

## Links Úteis
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Swagger](https://swagger.io/)

## Observações
- Certifique-se de que a API esteja rodando antes de executar os testes.
- Os testes cobrem autenticação, regras de negócio e validação dos principais fluxos da Biblioteca Caseira.
# PPP Biblioteca de Casa

API REST para catalogar livros das prateleiras de casa.

## Funcionalidades
- Registro de leitor
- Login do leitor (JWT)
- Adição, consulta, atualização e remoção de livros
- Campos do livro: título, autor, imagem da capa, status (em andamento, finalizado, na fila), fila, avaliação (1-5 estrelas), anotações
- Consulta do catálogo apenas após login
- Documentação Swagger disponível em `/api-docs`

## Estrutura do Projeto
- `src/routes`: Rotas da API
- `src/controllers`: Lógica dos endpoints
- `src/service`: Regras de negócio e autenticação
- `src/model`: Banco de dados em memória
- `resources`: Documentação Swagger

## Como executar
1. Instale as dependências:
   ```bash
   npm install express body-parser cors swagger-ui-express jsonwebtoken
   ```
2. Inicie o servidor:
   ```bash
   node src/app.js
   ```
3. Acesse a documentação Swagger em [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Autenticação
- Utilize o endpoint `/api/readers/login` para obter o token JWT
- Envie o token no header `Authorization: Bearer <token>` para acessar endpoints protegidos

## Documentação
A documentação completa dos endpoints e modelos está disponível no arquivo `resources/swagger.json` e na rota `/api-docs`.
