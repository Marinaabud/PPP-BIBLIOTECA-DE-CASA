const request = require('supertest');
const { expect } = require('chai');

describe('Login', () => {
    describe('POST /api/readers/register', () => {
        it('Deve retornar 201 com Leitor registrado com sucesso', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/api/readers/register')
                .set('content-type', 'application/json')
                .send({
                    'name': 'Marina',
                    'email': 'marina@biblioteca.com.br',
                    'password': '102030'
                });

            expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('id');

        });

        it('Deve retornar 400 com o Email já cadastrado ou dados inválidos', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/api/readers/register')
                .set('content-type', 'application/json')
                .send({
                    'name': 'Marina',
                    'email': 'Mariinaa@biblioteca.com.br',
                    'password': '102030'
                });


            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error');
        });

        it('Deve retornar 200 com Login realizado com sucesso', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/api/readers/login')
                .set('content-type', 'application/json')
                .send({
                    'name': 'Marina',
                    'email': 'Mariinaa@biblioteca.com.br',
                    'password': '102030'
                });


            expect(resposta.status).to.equal(200);
            expect(resposta.body).to.have.property('token');

        });

            it('Deve retornar 401 com Credenciais Inválidas', async () => {
                const resposta = await request('http://localhost:3000')
                    .post('/api/readers/login')
                    .set('content-type', 'application/json')
                    .send({

                        "token": "string"
                });

                expect(resposta.status).to.equal(401);
                expect(resposta.body).to.have.property('error');

            });
        });
    });

