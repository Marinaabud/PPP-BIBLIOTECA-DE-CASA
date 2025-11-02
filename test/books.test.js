const request = require('supertest');
const { expect } = require('chai');

describe('Books', () => {
    describe('POST /api/books', () => {
        it('Deve retornar 201 com Livro adicionado', async () => {
            // Registrar leitor
            // Adicionar livro com token inválido
            const resposta = await request('http://localhost:3000')
                .post('/api/books')
                .set('content-type', 'application/json')
                .set('Authorization', 'Bearer token_invalido')
                .send({
                    'title': "Verity",
                    'author': "Colleen Hoover",
                    'coverImage': "sem imagem",
                    'status': "em andamento",
                    'queue': true,
                    'rating': 5,
                    'notes': "string"
                });

            expect(resposta.status).to.equal(403);
            console.log(resposta.body);
        });

        it('Deve retornar 400 com Dados inválidos', async () => {
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
                    'author': "",
                    'coverImage': "sem imagem",
                    'status': "em andamento",
                    'queue': true,
                    'rating': 5,
                    'notes': "string"
                });

            expect(resposta.status).to.equal(400);
        });
        it('Deve retornar 401 com Token não fornecido', async () => {
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

            // Adicionar livro sem autenticação
            const resposta = await request('http://localhost:3000')
                .post('/api/books')
                .set('content-type', 'application/json')
                .send({
                    'title': "Verity",
                    'author': "Collen Hoover",
                    'coverImage': "sem imagem",
                    'status': "em andamento",
                    'queue': true,
                    'rating': 5,
                    'notes': "string"
                });

            expect(resposta.status).to.equal(401);
        });
        it('Deve retornar 403 com Token inválido', async () => {
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

            // Adicionar livro com token inválido
            const resposta = await request('http://localhost:3000')
                .post('/api/books')
                .set('content-type', 'application/json')
                .set('Authorization', 'Bearer token_invalido')
                .send({
                    'title': "Verity",
                    'author': "Colleen Hoover",
                    'coverImage': "sem imagem",
                    'status': "em andamento",
                    'queue': true,
                    'rating': 5,
                    'notes': "string"
                });

            expect(resposta.status).to.equal(403);
        });

        describe('GET /api/books', () => {
            it('Deve retornar 200 com Lista de Livro', async () => {
                // Registrar leitor
                // Adicionar livro com token inválido
                const resposta = await request('http://localhost:3000')
                    .get('/api/books')
                    .set('content-type', 'application/json')
                    .set('Authorization', 'Bearer token_invalido')
                    .send({
                        'id': 0,
                        'readerId': 0,
                        'title': "Verity",
                        'author': "Colleen Hoover",
                        'coverImage': "sem imagem",
                        'status': "em andamento",
                        'queue': true,
                        'rating': 5,
                        'notes': "string"
                    });

                expect(resposta.status).to.equal(403);
            });
            it('Deve retornar 401 com Token não fornecido', async () => {

                const resposta = await request('http://localhost:3000')
                    .get('/api/books')
                    .set('content-type', 'application/json')
                    .send({

                        'id': 0,
                        'readerId': 0,
                        'title': "Verity",
                        'author': "Colleen Hoover",
                        'coverImage': "sem imagem",
                        'status': "em andamento",
                        'queue': true,
                        'rating': 5,
                        'notes': "string"
                    });

                expect(resposta.status).to.equal(401);
            });
            it('Deve retornar 403 com Token inválido', async () => {

                const resposta = await request('http://localhost:3000')
                    .get('/api/books')
                    .set('content-type', 'application/json')
                    .set('Authorization', 'Bearer token_invalido')
                    .send({

                        'id': 0,
                        'readerId': 0,
                        'title': "Verity",
                        'author': "Colleen Hoover",
                        'coverImage': "sem imagem",
                        'status': "em andamento",
                        'queue': true,
                        'rating': 5,
                        'notes': "string"
                    });

                expect(resposta.status).to.equal(403);
            });
            it('Deve retornar 200 com Detalhes do livro', async () => {

                await request('http://localhost:3000')
                    .post('/api/readers/register')
                    .set('content-type', 'application/json')
                    .send({
                        'name': 'Marina',
                        'email': 'marina@biblioteca.com.br',
                        'password': '102030'
                    });


                const respostaLogin = await request('http://localhost:3000')
                    .post('/api/readers/login')
                    .set('content-type', 'application/json')
                    .send({
                        'email': 'marina@biblioteca.com.br',
                        'password': '102030'
                    });
                const token = respostaLogin.body.token;


                const respostaLivro = await request('http://localhost:3000')
                    .post('/api/books')
                    .set('content-type', 'application/json')
                    .set('Authorization', `Bearer ${token}`)
                    .send({
                        'title': "Verity",
                        'author': "Colleen Hoover",
                        'coverImage': "sem imagem",
                        'status': "em andamento",
                        'queue': true,
                        'rating': 5,
                        'notes': "string"
                    });
                const id = respostaLivro.body.id;


                const resposta = await request('http://localhost:3000')
                    .get(`/api/books/${id}`)
                    .set('Authorization', `Bearer ${token}`);

                expect(resposta.status).to.equal(200);
            });
            it('Deve retornar 404 com Livro não encontrado', async () => {

                await request('http://localhost:3000')
                    .post('/api/readers/register')
                    .set('content-type', 'application/json')
                    .send({
                        'name': 'Marina',
                        'email': 'marina@biblioteca.com.br',
                        'password': '102030'
                    });


                const respostaLogin = await request('http://localhost:3000')
                    .post('/api/readers/login')
                    .set('content-type', 'application/json')
                    .send({
                        'email': 'marina@biblioteca.com.br',
                        'password': '102030'
                    });
                const token = respostaLogin.body.token;


                const respostaLivro = await request('http://localhost:3000')
                    .post('/api/books')
                    .set('content-type', 'application/json')
                    .set('Authorization', `Bearer ${token}`)
                    .send({

                        'id': 2,
                        'readerId': 0,
                        'title': "É assim que acaba",
                        'author': "Colleen Hoveer",
                        'coverImage': "sem imagem",
                        'status': "em andamento",
                        'queue': true,
                        'rating': 5,
                        'notes': "string"
                    });
                const id = respostaLivro.body.id;


                const resposta = await request('http://localhost:3000')
                    .get(`/api/books/{10}`)
                    .set('Authorization', `Bearer ${token}`);

                expect(resposta.status).to.equal(404);
            });
            describe('PUT /api/books/{id}', () => {
                it('Deve retornar 200 com Livro atualizado', async () => {
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
                    const respostaLivro = await request('http://localhost:3000')
                        .post('/api/books')
                        .set('content-type', 'application/json')
                        .set('Authorization', `Bearer ${token}`)
                        .send({
                            'title': "Verity",
                            'author': "Colleen Hoover",
                            'coverImage': "sem imagem",
                            'status': "em andamento",
                            'queue': true,
                            'rating': 5,
                            'notes': "string"
                        });
                    const id = respostaLivro.body.id;

                    // Atualizar livro autenticado
                    const resposta = await request('http://localhost:3000')
                        .put(`/api/books/${id}`)
                        .set('content-type', 'application/json')
                        .set('Authorization', `Bearer ${token}`)
                        .send({
                            'title': "Verity",
                            'author': "Colleen Hoover",
                            'coverImage': "sem imagem",
                            'status': "finalizado",
                            'queue': true,
                            'rating': 5,
                            'notes': "string"
                        });

                    expect(resposta.status).to.equal(200);

                    describe('DELETE /api/books/{id}', () => {
                        it('Deve retornar 204 com Livro removido', async () => {
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
                            const respostaLivro = await request('http://localhost:3000')
                                .post('/api/books')
                                .set('content-type', 'application/json')
                                .set('Authorization', `Bearer ${token}`)
                                .send({
                                    'title': "Verity",
                                    'author': "Colleen Hoover",
                                    'coverImage': "sem imagem",
                                    'status': "em andamento",
                                    'queue': true,
                                    'rating': 5,
                                    'notes': "string"
                                });
                            const id = respostaLivro.body.id;

                            // Atualizar livro autenticado
                            const resposta = await request('http://localhost:3000')
                                .delete(`/api/books/${id}`)
                                .set('content-type', 'application/json')
                                .set('Authorization', `Bearer ${token}`)
                                .send({
                                    'title': "Verity",
                                    'author': "Colleen Hoover",
                                    'coverImage': "sem imagem",
                                    'status': "finalizado",
                                    'queue': true,
                                    'rating': 5,
                                    'notes': "string"
                                });

                            expect(resposta.status).to.equal(204);
                        });
                    });
                });
            });
        });
    });
});