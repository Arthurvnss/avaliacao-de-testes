describe("Questao 03 - Tabela 1: clientes com divida acima de $50.00", () => {
  it("percorre as linhas e imprime primeiro nome, ultimo nome e site", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");

    const clientes = [];

    cy.get("#table1 tbody tr").each(($linha) => {
      const colunas = $linha.find("td");
      const primeiroNome = colunas.eq(0).text().trim();
      const ultimoNome = colunas.eq(1).text().trim();
      const dueTexto = colunas.eq(3).text().trim();
      const site = colunas.eq(4).text().trim();
      const due = Number(dueTexto.replace("$", "").replace(",", ""));

      if (due > 50.00) {
        clientes.push({ primeiroNome, ultimoNome, site, due: dueTexto });
      }
    }).then(() => {
      console.log("Clientes com divida acima de $50.00:");
      clientes.forEach((cliente) => {
        console.log(
          `Primeiro Nome: ${cliente.primeiroNome} | Último Nome: ${cliente.ultimoNome} | Site: ${cliente.site}`
        );
      });
      cy.log(`Clientes encontrados: ${clientes.length}`);
      expect(clientes.length).to.be.greaterThan(0);
    });
  });
});
