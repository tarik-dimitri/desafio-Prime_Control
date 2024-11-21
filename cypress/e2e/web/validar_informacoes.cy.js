import ValidarInformacoesPage from "../../page_objects/ValidarInformacoesPage";

describe("Validar Informações do Candidato", () => {
  const validarInformacoesPage = new ValidarInformacoesPage();

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.login("teste@usuario.com", "senha123");
    cy.url({ timeout: 10000 }).should("include", "/app/home");
    cy.contains("Cadastrar Cliente").scrollIntoView().click();
  });

// Scenario: Enviar dados do projeto e redirecionar para a tela de informações
// Given que estou na página inicial do sistema
// And clico no botão "Logout"
//And clico em "enviar dados"
// When preencho os campos obrigatórios com informações válidas
// And envio as informações preenchidas
// Then devo ver uma mensagem indicando que os dados foram registrados com sucesso
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
