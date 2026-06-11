# Portfólio Profissional - Thiago Melo

Portfólio profissional de Thiago Henrique Melo da Silva, Desenvolvedor Java
Sênior com mais de 8 anos de experiência em sistemas corporativos.

## Demo

https://thiago-jv.github.io/curso-angular-portifolio/

## Objetivos

- Apresentar experiência profissional e principais entregas.
- Demonstrar domínio de Java, Spring Boot, AWS, Angular e arquitetura.
- Reunir projetos próprios, formação e certificações.
- Facilitar o contato para oportunidades CLT e projetos PJ.

## Funcionalidades

- Hero com posicionamento profissional e links de contato.
- Seção de principais entregas por contexto de negócio.
- Stack principal organizada por área.
- Histórico profissional expansível.
- Cards de projetos próprios.
- Formação e certificações com detalhes em dialogs.
- Metadados Open Graph, Twitter Cards e Schema.org `Person`.
- Layout responsivo e navegação acessível por teclado.

## Stack do projeto

- Angular 17
- TypeScript
- SCSS
- Angular Material
- RxJS
- GitHub Pages

## Estrutura principal

```text
src/app/modules/portfolio/
  components/
    contact/
    deliveries/
    dialog/
    experiences/
    header/
    knowledge/
    portfolio-projects/
    projects/
  interface/
  enum/
  pages/home/
```

## Execução local

```bash
npm ci
npm start
```

A aplicação estará disponível em `http://localhost:4200/`.

## Build

```bash
npm run build
npm run build:gh-pages
```

## Deploy no GitHub Pages

```bash
npm run deploy:gh-pages
```
