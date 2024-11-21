import LogoutPage from "../../page_objects/LogoutPage";

// Feature: Logout
describe("Realizar Logout", () => {
  const logoutPage = new LogoutPage();

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.login("teste@usuario.com", "senha123");
    cy.url({ timeout: 10000 }).should("include", "/app/home");
    cy.contains("Cadastrar Cliente").scrollIntoView().click();
  });

  // Scenario: Realizar logout com sucesso
  // Given que estou na página inicial do sistema
  // When clico no botão "Sair"
  // Then devo ser redirecionado para a tela de login
  it("Deve enviar dados do projeto e redirecionar para a tela de informações", () => {
    logoutPage.clicarBotaoFinalizar();
    logoutPage.confirmarLogout();
    logoutPage.validarRedirecionamentoParaLogin();
  });
});
