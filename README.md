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

## Sobre

Projeto criado como desafio técnico de Node.js, escolhi as tecnologias abaixo por ser
de fácil implementação e por possuir um setup inicial bacana. Como o desafio pedia um banco embeded, acabei
usando um ORM para o SQLite, mas se for necessário mudar para outro banco SQL não teria
grandes alterações. Aproveitei para criar uma arquitetura com separação (controllers, services, entidades e repositórios).
---

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

```
# Roda as migrations no banco local SQLite
$ yarn typeorm migration:run

# Ambiente de desenvolvimento
$ yarn star:dev

# Testes unitários (somenta para o arquivo service das postagens)
$ yarn test
```


## Endpoints
Documentação disponivel em http://localhost:3000/docs

###Users

Criar usuário:
```
curl --request POST \
  --url http://localhost:3000/users \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "any",
	"email": "anymail@mail.com",
	"password": "123456"
}'

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
###Posts

Listar postagens:
```
curl --request GET \
  --url http://localhost:3000/api/v1/posts \
  --header 'Authorization: Bearer token'
```

Obter uma postagem:
```
curl --request GET \
  --url http://localhost:3000/api/v1/posts/1 \
  --header 'Authorization: Bearer token'
```

Criar postagem:
```
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
```
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
```
curl --request DELETE \
  --url http://localhost:3000/posts/1 \
  --header 'Authorization: Bearer token'
```
