# SQL vs NoSQL em Aplicações Dinâmicas e Escaláveis

Projeto desenvolvido por **Fabiano Souza de Oliveira** como parte do Trabalho de Conclusão de Curso (TCC) da Pós-graduação em Desenvolvimento Full Stack da **UNIVERSIDADE DE MARÍLIA (UNIMAR)**.

## Sobre o Projeto

Este projeto acadêmico tem como objetivo principal demonstrar e comparar, de forma prática, as diferenças entre bancos de dados SQL (MySQL) e NoSQL (Firebase), destacando as vantagens, desvantagens e contextos de aplicação para cada uma das tecnologias em projetos dinâmicos, escaláveis e modernos.

A aplicação desenvolvida utiliza Angular (v17.0.8) como framework frontend, permitindo a interação com ambos os bancos através de requisições HTTP, realizando operações básicas de CRUD (Create, Read, Update, Delete).

## Tecnologias Utilizadas

- **Frontend:** Angular 17.0.8
- **Backend/Data Storage:** Firebase Realtime Database (NoSQL), MySQL (SQL)

## Funcionalidades

- Cadastro, edição, listagem e exclusão de dados;
- Comparação prática e visual entre desempenho e facilidade de uso das operações em bancos SQL e NoSQL;
- Análise sobre escalabilidade, desempenho, consistência e custos operacionais de cada tecnologia.

## Requisitos e Configuração

### Pré-requisitos

- Node.js (v18+ recomendado)
- Angular CLI (v17.0.8)

### Instalação

Clone o repositório:

```bash
git clone https://github.com/fsouzaweb/tcc-sql-vs-nosql.git
```

Instale as dependências:

```bash
npm install
```

### Servidor de Desenvolvimento

Execute o servidor de desenvolvimento Angular:

```bash
ng serve
```

Acesse em seu navegador: `http://localhost:4200/`.

## Gerando novos componentes

```bash
ng generate component nome-do-componente
```

## Testes

### Unitários

Execute os testes unitários com Karma:

```bash
ng test
```

### End-to-End

Para testes E2E, adicione primeiramente um pacote que implemente essa capacidade, depois execute:

```bash
ng e2e
```

## Estrutura do Projeto

- `src/`: Código fonte da aplicação
- `dist/`: Diretório dos arquivos compilados após build (`ng build`)

## Referências

- [Angular CLI](https://angular.io/cli)
- [Firebase Documentation](https://firebase.google.com/docs)
- [MySQL Documentation](https://dev.mysql.com/doc/)

---

**Autor:** Fabiano Souza de Oliveira  
**Instituição:** UNIVERSIDADE DE MARÍLIA (UNIMAR)  
**Repositório:** [https://github.com/fsouzaweb/tcc-sql-vs-nosql](https://github.com/fsouzaweb/tcc-sql-vs-nosql)

---
