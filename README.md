# Personal Page

Portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS.

O projeto apresenta seções como:

- Hero
- Sobre
- Projetos em destaque
- Linha do tempo
- Contato

## Projetos em destaque

A seção de projetos busca apenas os repositórios fixados (pinned) no perfil do GitHub, via API GraphQL.

- Fonte: `user.pinnedItems` (GraphQL)
- Quantidade: até 6 repositórios

Se a chamada falhar, a seção pode ficar vazia temporariamente.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Motion

## Como rodar (Yarn)

Este projeto costuma ser executado com Yarn.

1. Instale as dependências:

```bash
yarn
```

2. Rode em desenvolvimento:

```bash
yarn dev
```

3. Acesse no navegador:

```txt
http://localhost:3000
```

## Scripts úteis

```bash
yarn dev
yarn build
yarn start
yarn lint
```

## Variáveis de ambiente (opcional)

Crie um arquivo `.env.local` na raiz para customizar a busca dos projetos do GitHub:

```env
GITHUB_USERNAME=Pedrohses
GITHUB_TOKEN=
```

- `GITHUB_USERNAME`: usuário cujos starred repos serão exibidos.
- `GITHUB_TOKEN`: token necessario para consultar a API GraphQL e carregar os repositórios pinnados.

Se `GITHUB_TOKEN` não for informado, a aplicação continua funcionando normalmente.

## Estrutura principal

- [src/app/page.tsx](src/app/page.tsx): composição da página principal.
- [src/components/sections](src/components/sections): seções do portfólio.
- [src/components/ui](src/components/ui): componentes de UI e dados de cada seção.

## Objetivo do projeto

Servir como vitrine pessoal para recrutadores, clientes e comunidade, destacando experiência, projetos e formas de contato em uma interface moderna e responsiva.
