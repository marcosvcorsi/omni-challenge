# Omni Back-end Challenge

# API para avaliar a lógica

O objetivo aqui é criar uma api que possamos avaliar a linha de raciocínio do candidato. As bibliotecas que serão utilizadas ficam a critério do candidato o que vamos verificar aqui é o funcionamento, estrutura e organização.

### Tecnologia a ser utilizada
É necessário implementar este projeto em Nodejs usando typescript. 

### Operações CRUD
Deverá ser criada uma API REST com as quatro operações CRUD. As informações deverão ser armazenadas em um banco de critério do próprio candidato. Sugerimos um banco em memória apenas para mandar as informações durante a execução do projeto.

### Testes
Criar pelo menos um teste unitário de um arquivo do projeto.

### Logs
Incluir logs informando o que está ocorrendo pensando em que faria o troubleshootin do sistema.

### Autenticação
Criar um meio para efetuar uma autenticação. Não é mandatório mas é um diferencial.

# Admin Blog API

## O que o projeto faz?

- Cadastrar e autentica o usuário.
- Faz o gerenciamento das postagens.

---

## Tecnologias

- [Node.js](https://nodejs.org/en/)

- [Typescript](https://www.typescriptlang.org/)

- [NestJS](https://docs.nestjs.com/)

- [TypeORM](https://typeorm.io/#/)

- [SQLite](https://www.sqlite.org/index.html)

---

## Download e instalação:

```bash
# Baixando o projeto
git clone https://github.com/marcosvcorsi/omni-challenge.git

# Acessando a pasta
$ cd omni-challenge

# Instalando as dependencias
# Com Yarn
$ yarn
```

Todos os arquivos de váriaveis de ambientes estão presentes no repositório,
se necessário, crie o seu de acordo com o .env.example.

## Execução

```bash
# Roda as migrations no banco local SQLite
$ yarn typeorm migration:run

# Ambiente de desenvolvimento
$ yarn star:dev

# Testes unitários (somente para o arquivo service das postagens)
$ yarn test
```


## Endpoints
Documentação disponivel em http://localhost:3000/docs

Criar usuário:
```bash
curl --request POST \
  --url http://localhost:3000/users \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "any",
	"email": "anymail@mail.com",
	"password": "123456"
}'
```
Login Usuário:
```
curl --request POST \
  --url http://localhost:3000/users/login \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "anymail@mail.com",
	"password": "123456"
}'
```

Listar postagens:
```bash
curl --request GET \
  --url http://localhost:3000/api/v1/posts \
  --header 'Authorization: Bearer token'
```

Obter uma postagem:
```bash
curl --request GET \
  --url http://localhost:3000/api/v1/posts/1 \
  --header 'Authorization: Bearer token'
```

Criar postagem:
```bash
curl --request POST \
  --url http://localhost:3000/posts \
  --header 'Authorization: Bearer token' \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "anytitle",
	"content": "anycontent"
}'
```

Editar postagem:
```bash
curl --request PUT \
  --url http://localhost:3000/posts/1 \
  --header 'Authorization: Bearer token' \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "anyupdatedtitle",
	"content": "anyupdatedcontent"
}'
```

Deletar postagem:
```bash
curl --request DELETE \
  --url http://localhost:3000/posts/1 \
  --header 'Authorization: Bearer token'
```
