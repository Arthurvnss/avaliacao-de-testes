describe("Questao 02 - Books to Scrape: livros das paginas 1 e 2", () => {
  it("extrai titulo e preco das duas paginas e confirma 40 livros", () => {
    cy.visit("http://books.toscrape.com/");

    const livros = [];

    function extrairLivrosDaPagina() {
      return cy.get("article.product_pod").each(($livro) => {
        const titulo = $livro.find("h3 a").attr("title").trim();
        const preco = $livro.find(".price_color").text().trim();
        livros.push({ titulo, preco });
        console.log(`Titulo: ${titulo} | Preco: ${preco}`);
      });
    }

    extrairLivrosDaPagina().then(() => {
      cy.get("li.next a").should("be.visible").click();
      cy.url().should("include", "page-2.html");
      cy.get("article.product_pod").should("have.length", 20);
      extrairLivrosDaPagina().then(() => {
        console.log("Total de livros extraidos das paginas 1 e 2:", livros.length);
        cy.log(`Total de livros extraidos: ${livros.length}`);
        expect(livros).to.have.length(40);
      });
    });
  });
});
