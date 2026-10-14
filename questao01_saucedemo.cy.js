describe("Questao 01 - SauceDemo: produtos abaixo de $20.00", () => {
  it("faz login, percorre os produtos e imprime nome e preco dos que custam menos de $20", () => {
    cy.visit("/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").should("have.length.greaterThan", 0).then(($items) => {
      const produtosBaratos = [];

      $items.each((_, item) => {
        const nome = Cypress.$(item).find(".inventory_item_name").text().trim();
        const precoTexto = Cypress.$(item).find(".inventory_item_price").text().trim();
        const preco = Number(precoTexto.replace("$", ""));

        if (preco < 20.00) {
          produtosBaratos.push({ nome, preco: precoTexto });
        }
      });

      cy.log(`Produtos abaixo de $20.00: ${produtosBaratos.length}`);
      console.log("Produtos que custam menos de $20.00:", produtosBaratos);
      produtosBaratos.forEach((produto) => {
        console.log(`Nome: ${produto.nome} | Preco: ${produto.preco}`);
      });

      expect(produtosBaratos.length).to.be.greaterThan(0);
    });
  });
});
