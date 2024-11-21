import ValidarInformacoesPage from "../../page_objects/ValidarInformacoesPage";

// Feature: Validar Informações do Candidato
describe("Validar Informações do Candidato", () => {
  const validarInformacoesPage = new ValidarInformacoesPage();

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.login("teste@usuario.com", "senha123");
    cy.url({ timeout: 10000 }).should("include", "/app/home");
    cy.contains("Cadastrar Cliente").scrollIntoView().click();
  });

  it("Deve enviar dados do projeto e redirecionar para a tela de informações", () => {
    validarInformacoesPage.clicarBotaoFinalizar();
    validarInformacoesPage.preencherInformacoes({
      nome: "João Silva",
      telefone: "1234567890",
      email: "teste@usuario.com",
      githubLink: "https://github.com/joaosilva/projeto-teste",
      nomeRecrutador: "Maria Pereira",
    });
    validarInformacoesPage.salvarInformacoes();
    validarInformacoesPage.validarMensagemSucesso();
  });
});
