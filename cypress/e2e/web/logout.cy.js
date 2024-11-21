// Feature: Logout
describe("Realizar Logout", () => {
  beforeEach(() => { //Gancho que realiza o login antes do teste
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
    cy.contains("Finalizar").click();
    cy.get('.btn-danger-modal').click();
    cy.url({ timeout: 10000 }).should("include", "/app"); 
    cy.contains("Acessar").should("be.visible"); //Verificar se após o logout somos redirecionados para a página de login
  });
});
