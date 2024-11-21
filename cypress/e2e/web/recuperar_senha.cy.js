import RecuperarSenhaPage from "../../page_objects/RecuperarSenhaPage";

describe("Recuperar Senha", () => {
  const recuperarSenhaPage = new RecuperarSenhaPage();

// Scenario: Enviar solicitação de redefinição de senha
// Given que estou na página de login
// When eu clico no link "Esqueci minha senha"
// And preencho o campo de email com um email válido
// And envio a solicitação de recuperação
// Then devo ver uma mensagem de sucesso indicando que o email foi enviado
  it("Deve enviar solicitação de redefinição de senha", () => {
    recuperarSenhaPage.acessarPaginaRecuperarSenha();
    recuperarSenhaPage.preencherEmail("teste@usuario.com");
    recuperarSenhaPage.enviarSolicitacao();
    recuperarSenhaPage.validarMensagemEnvio();
  });
});
