class CriarContaPage {
  acessarPaginaCriarConta() {
    cy.visit(`${Cypress.env("baseUrls").web}/app/novaconta`);
  }

  preencherFormulario(email, senha) {
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(senha);
  }

  clicarBotao(botaoTexto) {
    cy.contains("button", botaoTexto).click();
  }

  validarCriacaoComSucesso() {
    cy.url().should("include", "/app");
  }

  validarErroEmailCadastrado() {
    cy.contains("Esse email já está em uso por outra conta").should("be.visible");
  }
}

module.exports = CriarContaPage;
