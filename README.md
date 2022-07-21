## Resumo

Nesse projeto foi desenvolvida uma REST API utilizando arquitetura de software MSC através do Node.js e Express. Além disso, foi utilizado o Sequelize como ORM (Object-Relational Mapper), ou seja, através dele foi possível criar o banco de dados, criar, popular e relacionar tabelas e também manipular os dados do database, realizando operações de CRUD (create, read, update e delete) utilizando apenas métodos JavaScript.

A API é um sistema de gerenciamento de conteúdo para um blog, no qual permite manipular dados dos usuários, dos posts e suas categorias.

Para a gestão de dados foi utilizado o sistema MySQL.

## Tecnologias


Node.js

Express

Sequelize

MySQL

Swagger

JWT



## Como executar
1. Clone o projeto e acesse a pasta do mesmo.
2. Rode o comando npm install no seu terminal.
3. Rode o comando docker-compose up -d --build no seu terminal.
4. Rode o comando docker exec -it blogs_api bash no seu terminal.
5. Execute dentro do terminal do container (aquele que acabou de abrir) o comando npm install.
6. Rode o comando npm run debug.
7. Abra seu navegador e acesse a documentação da API a partir do link localhost:3000/docs.


Bom code review!
