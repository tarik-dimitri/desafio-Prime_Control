import RecuperarSenhaPage from "../../page_objects/RecuperarSenhaPage";

// Feature: Recuperar Senha
describe("Recuperar Senha", () => {
  const recuperarSenhaPage = new RecuperarSenhaPage();

  it("Deve enviar solicitação de redefinição de senha", () => {
    recuperarSenhaPage.acessarPaginaRecuperarSenha();
    recuperarSenhaPage.preencherEmail("teste@usuario.com");
    recuperarSenhaPage.enviarSolicitacao();
    recuperarSenhaPage.validarMensagemEnvio();
  });
});
