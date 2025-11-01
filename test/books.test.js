const request = require('supertest');
const { expect } = require('chai');

describe('Books', () => {
    describe('POST /api/books', () => {
        it('Deve retornar 201 com Livro adicionado', async () => {
            // Registrar leitor
            await request('http://localhost:3000')
                .post('/api/readers/register')
                .set('content-type', 'application/json')
                .send({
                    'name': 'Marina',
                    'email': 'marina@biblioteca.com.br',
                    'password': '102030'
                });

            // Login para obter token
            const respostaLogin = await request('http://localhost:3000')
                .post('/api/readers/login')
                .set('content-type', 'application/json')
                .send({
                    'email': 'marina@biblioteca.com.br',
                    'password': '102030'
                });
            const token = respostaLogin.body.token;

            // Adicionar livro autenticado
            const resposta = await request('http://localhost:3000')
                .post('/api/books')
                .set('content-type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    'title': "Verity",
                    'author': "Collen Hoover",
                    'coverImage': "sem imagem",
                    'status': "em andamento",
                    'queue': true,
                    'rating': 5,
                    'notes': "string"
                });

            expect(resposta.status).to.equal(201);
            console.log(resposta.body);
        });

        it('Deve retornar 400 com Dados inválidos', async () => {
        });
    });
});
