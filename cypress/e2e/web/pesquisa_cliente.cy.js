// Feature: Pesquisa de Cliente
describe("Pesquisa de Cliente", () => {
  beforeEach(() => {
    // Configurando a resolução Full HD
    cy.viewport(1920, 1080);
    cy.login("teste@usuario.com", "senha123"); // Ajuste o método de login, se necessário
    cy.url({ timeout: 10000 }).should("include", "/app/home");
    cy.contains("Clientes").scrollIntoView().click();
  });

  // Scenario: Pesquisar cliente existente
  // Given que estou na página inicial do sistema
  // When insiro um nome válido no campo de pesquisa
  // Then os dados do cliente devem ser exibidos
  it("Deve pesquisar cliente por nome", () => {
    // Certificando que a página está carregada e o campo está visível
    cy.get('input[placeholder="Pesquisar por nome"]')
      .should("be.visible")
      .type("Daniel Machado");

    // Validando o botão de pesquisa
    cy.get("#button-addon2")
      .click({ force: true }); // Força o clique, mesmo se estiver sobreposto

    // Verificando se os dados do cliente são exibidos
    cy.contains("Dados do Cliente", { timeout: 10000 }).should("be.visible");
    cy.contains("Nome: Daniel Machado").should("be.visible");
    cy.contains("E-mail: bruno.cavalcante@example.net").should("be.visible");
    cy.contains("Telefone: 5584929376540").should("be.visible");
  });
});
