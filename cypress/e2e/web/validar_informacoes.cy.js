// Feature: Validar Informações do Candidato
describe("Validar Informações do Candidato", () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.login("teste@usuario.com", "senha123");
    cy.url({ timeout: 10000 }).should("include", "/app/home");
    cy.contains("Cadastrar Cliente").scrollIntoView().click();
  });

  // Scenario: Validar preenchimento de informações no modal
  // Given que finalizei a submissão do formulário
  // When clico em "Enviar"
  // Then o modal de validação de informações deve ser exibido
  it("Deve enviar dados do projeto e redirecionar para a tela de informações", () => {
    cy.contains("Finalizar").click();
    cy.get('.btn-primary-modal').should("be.visible").click();  // Aguardar a abertura do modal

    cy.get('#nome').click().type("João Silva");  // Preenche o modal com as informações do candidato
    cy.get('#telefone').click().type("1234567890");
    cy.get('#email').click().type("teste@usuario.com");
    cy.get('#githubLink').click().type("https://github.com/joaosilva/projeto-teste");
    cy.get('#nomeRecrutador').click().type("Maria Pereira");
    cy.contains("Salvar").click();
    cy.contains("As informações foram registradas com sucesso!").should("be.visible");
  });
});
