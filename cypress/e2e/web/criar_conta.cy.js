
// Feature: Criar Conta
describe("Criar Conta", () => {

  const baseUrl = Cypress.env('baseUrls').web;

  // Scenario: Criar uma nova conta com sucesso
  // Given que estou na página de criação de conta
  // When insiro um email e senha válidos
  // Then devo ser redirecionado para a página de login
  it("Deve criar uma conta com sucesso", () => {
    cy.visit(baseUrl + "/app/novaconta");
    cy.get("input[type='email']").type("novo@usuario.com");
    cy.get("input[type='password']").type("senha123");
    cy.contains("button", "Criar conta").click();
    cy.url().should("include", "/app"); // Redireciona para a página de login
  });

  // Scenario: Tentar criar conta com email já cadastrado
  // Given que estou na página de criação de conta
  // When insiro um email já registrado
  // Then devo ver uma mensagem de erro indicando que o email já está em uso
  it("Deve exibir erro ao tentar criar conta com email já cadastrado", () => {
    cy.visit(baseUrl + "/app/novaconta");
    cy.get("input[type='email']").type("email@ja.existe.com");
    cy.get("input[type='password']").type("senha123");
    cy.contains("button", "Criar conta").click();
    cy.contains("Esse email já está em uso por outra conta").should("be.visible");
  });
});
