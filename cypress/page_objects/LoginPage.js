class LoginPage {
  acessarPaginaLogin() {
    cy.visit(`${Cypress.env("baseUrls").web}/app`);
  }

  preencherEmail(email) {
    cy.get('input[type="email"]').type(email);
  }

  preencherSenha(senha) {
    cy.get('input[type="password"]').type(senha);
  }

  clicarBotao(botaoTexto) {
    cy.contains("button", botaoTexto).click();
  }

  validarRedirecionamento() {
    cy.url().should("include", "/app/home");
  }

  validarErroCredenciais() {
    cy.contains("E-mail ou senha inválida.").should("be.visible");
  }
}

module.exports = LoginPage;
