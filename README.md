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
