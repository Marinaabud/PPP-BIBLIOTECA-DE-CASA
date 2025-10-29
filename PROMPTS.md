1.	Objetivo
Criar uma API Rest para catalogar os livros de prateleiras que possui em casa.
2. Contexto
- A API possui as seguintes funcionalidades: registro de leitor, registro dos livros com campo de imagem para capa, registro de livro em andamento, registro de livros adicionados na fila, selecionar quantas estrelas (até 5 estrelas) o livro corresponde com as expectativas do leitor e campo de anotações.
- Para que eu possa usar as funcionalidades, preciso fazer login como leitor.
- Para que o leitor possa consultar o catálogo, ele precisa fazer login como leitor. 
- O leitor poderá adicionar utilizar todas as funcionalidades do sistema.
- Será um simples catálogo com os livros adicionados pelo leitor na qual terá acesso a todos e poderá inserir as funcionalidades propostas.
3. Regras
- Não me pergunte nada, só faça.
- A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.
- Adicione um endpoint para renderizar o Swagger.
- Construa um arquivo README para descrever o projeto
- Divida a API em camadas: routes, controllers, service e model
- Armazene os dados da API em um banco de dados em memória
- Utilize a biblioteca express para construir a API Rest
- Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.