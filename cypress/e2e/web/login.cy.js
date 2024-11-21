// Feature: Login
describe("Login", () => {
  const baseUrl = Cypress.env('baseUrls').web;
  
  // Scenario: Realizar Login com sucesso
  // Given que estou na página de login
  // When insiro o email e senha corretos
  // Then devo ser redirecionado para a página inicial
  it("Deve realizar login com sucesso", () => {
    cy.visit(baseUrl + "/app");
    cy.login("teste@usuario.com", "senha123");
    cy.url().should("include", "/home");
  });

  // Scenario: Validar Login com senha inválida
  // Given que estou na página de login
  // When insiro o email correto e uma senha inválida
  // Then devo ver uma mensagem de erro
  it("Deve exibir erro ao tentar login com senha inválida", () => {
    cy.visit(baseUrl + "/app");
    cy.login("teste@usuario.com", "senha_incorreta");
    cy.contains("E-mail ou senha inválida.").should("be.visible");
  });
});
