class RecuperarSenhaPage {
  acessarPaginaRecuperarSenha() {
    const baseUrl = Cypress.env("baseUrls").web;
    cy.visit(baseUrl + "/app");
    cy.contains("a", "Esqueci minha senha").click();
  }

  preencherEmail(email) {
    cy.get("input[type='email']").type(email);
  }

  enviarSolicitacao() {
    cy.contains("button", "Enviar").click();
  }

  validarMensagemEnvio() {
    cy.contains("Email enviado com sucesso").should("be.visible");
  }
}

export default RecuperarSenhaPage;
