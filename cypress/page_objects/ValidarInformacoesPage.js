class ValidarInformacoesPage {
  clicarBotaoFinalizar() {
    cy.contains("Finalizar").click();
    cy.get(".btn-primary-modal").should("be.visible").click();
  }

  preencherInformacoes(dados) {
    cy.get("#nome").click().type(dados.nome);
    cy.get("#telefone").click().type(dados.telefone);
    cy.get("#email").click().type(dados.email);
    cy.get("#githubLink").click().type(dados.githubLink);
    cy.get("#nomeRecrutador").click().type(dados.nomeRecrutador);
  }

  salvarInformacoes() {
    cy.contains("Salvar").click();
  }

  validarMensagemSucesso() {
    cy.contains("As informações foram registradas com sucesso!").should("be.visible");
  }
}

export default ValidarInformacoesPage;
