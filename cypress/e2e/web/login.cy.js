import LoginPage from "../../page_objects/LoginPage";

describe("Login", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.acessarPaginaLogin();
  });

   // Scenario: Realizar Login com sucesso
  // Given que estou na página de login
  // When insiro o email e senha corretos
  // Then devo ser redirecionado para a página inicial
  it("Deve realizar login com sucesso", () => {
    loginPage.preencherEmail("teste@usuario.com");
    loginPage.preencherSenha("senha123");
    loginPage.clicarBotao("Acessar");
    loginPage.validarRedirecionamento();
  });

  // Scenario: Validar Login com senha inválida
  // Given que estou na página de login
  // When insiro o email correto e uma senha inválida
  // Then devo ver uma mensagem de erro
  it("Deve exibir erro ao tentar login com credenciais inválidas", () => {
    loginPage.preencherEmail("usuario@teste.com");
    loginPage.preencherSenha("senhaIncorreta");
    loginPage.clicarBotao("Acessar");
    loginPage.validarErroCredenciais();
  });
});
