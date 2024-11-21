class LogoutPage {
  clicarBotaoFinalizar() {
    cy.contains("Finalizar").click();
  }

  confirmarLogout() {
    cy.get(".btn-danger-modal").click();
  }

  validarRedirecionamentoParaLogin() {
    cy.url({ timeout: 10000 }).should("include", "/app");
    cy.contains("Acessar").should("be.visible");
  }
}

export default LogoutPage;
