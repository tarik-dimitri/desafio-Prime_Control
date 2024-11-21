import CriarContaPage from "../../page_objects/CriarContaPage";

describe("Criar Conta", () => {
  const criarContaPage = new CriarContaPage();

  beforeEach(() => {
    criarContaPage.acessarPaginaCriarConta();
  });

  // Scenario: Criar uma nova conta com sucesso
  // Given que estou na página de criação de conta
  // When insiro um email e senha válidos
  // Then devo ser redirecionado para a página de login
  it("Deve criar conta com sucesso", () => {
    criarContaPage.preencherFormulario("usuario@teste.com", "senha123");
    criarContaPage.clicarBotao("Criar");
    criarContaPage.validarCriacaoComSucesso();
  });

  // Scenario: Tentar criar conta com email já cadastrado
  // Given que estou na página de criação de conta
  // When insiro um email já registrado
  // Then devo ver uma mensagem de erro indicando que o email já está em uso
  it("Deve exibir erro ao tentar criar conta com email já cadastrado", () => {
    criarContaPage.preencherFormulario("usuario@teste.com", "senha123");
    criarContaPage.clicarBotao("Criar");
    criarContaPage.validarErroEmailCadastrado();
  });
});
