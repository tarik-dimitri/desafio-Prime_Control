describe("Pesquisa de Cliente", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.login("teste@usuario.com", "senha123");
    cy.url({ timeout: 10000 }).should("include", "/app/home");
    cy.contains("Clientes").scrollIntoView().click();
  });

  // Scenario: Pesquisar cliente existente
  // Given que estou na página inicial do sistema
  // When insiro um nome válido no campo de pesquisa
  // Then os dados do cliente devem ser exibidos
  it("Deve pesquisar cliente por nome", () => {
    cy.get('input[placeholder="Pesquisar por nome"]')
      .should("be.visible")
      .type("Daniel Machado");
    cy.get("#button-addon2")
      .click({ force: true }); // Força o clique, mesmo se estiver sobreposto

    cy.contains("Dados do Cliente", { timeout: 10000 }).should("be.visible");  // Verificando se os dados do cliente são exibidos
    cy.contains("Nome: Daniel Machado").should("be.visible");
    cy.contains("E-mail: bruno.cavalcante@example.net").should("be.visible");
    cy.contains("Telefone: 5584929376540").should("be.visible");
  });
});
