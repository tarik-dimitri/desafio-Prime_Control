
// Feature: Recuperar Senha
describe("Recuperar Senha", () => {
  const baseUrl = Cypress.env('baseUrls').web;
  // Scenario: Recuperar senha com email válido
  // Given que estou na página de recuperação de senha
  // When insiro um email válido
  // Then devo receber uma mensagem de confirmação
  it("Deve enviar solicitação de redefinição de senha", () => {
    cy.visit(baseUrl + "/app");
    cy.contains("a", "Esqueci minha senha").click();
    cy.get("input[type='email']").type("teste@usuario.com");
    cy.contains("button", "Enviar").click();
    cy.contains("Email enviado com sucesso").should("be.visible");
  });
});
