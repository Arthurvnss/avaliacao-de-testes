# Avaliacao de Testes - Cypress (JavaScript)

Projeto com as tres questoes da avaliacao, usando Cypress.

## Requisitos
- Node.js instalado
- VS Code ou GitHub Codespaces
- Internet para acessar os sites de teste

## Como executar
No terminal, dentro da pasta do projeto:

```bash
npm install
```

Execute uma questao por vez:

```bash
npm run test:q1
npm run test:q2
npm run test:q3
```

Ou execute todas:

```bash
npm test
```

Para abrir o Cypress com interface:

```bash
npm run cy:open
```

## O que cada teste faz
- **Questao 01:** entra no SauceDemo com `standard_user` / `secret_sauce`, percorre os produtos da pagina inicial e imprime nome e preco dos produtos com preco estritamente menor que `$20.00`.
- **Questao 02:** extrai titulo e preco dos 20 livros da primeira pagina, clica em `Next`, extrai os 20 da segunda pagina e valida que o total seja 40.
- **Questao 03:** percorre as linhas da `Table 1` e imprime primeiro nome, ultimo nome e site dos clientes cuja coluna `Due` seja maior que `$50.00`.

Os resultados de `console.log` aparecem no terminal quando o Cypress roda em modo headless (`cypress run`). Com `cypress open`, abra as ferramentas do navegador para consultar o console.

## Entrega no GitHub
1. Crie um repositorio no GitHub.
2. Envie os arquivos desta pasta para o repositorio.
3. Inclua o `README.md` para explicar como executar os testes.
