const CadastroClientePage = require("../../page_objects/CadastroClientePage");

describe("Pesquisa de Cliente", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080); // Resolução Full HD
    cy.login("teste@usuario.com", "senha123"); // Garantir login antes de cada teste
    cy.url({ timeout: 10000 }).should("include", "/app/home"); // Verificar que estamos na tela inicial
  });

  it("Deve cadastrar e pesquisar cliente cadastrado", () => {
    // Dados do cliente para cadastro
    const novoCliente = {
      nomeCompleto: "Cliente Pesquisa Automática",
      telefone: "987654321",
      cep: "12345-678",
      email: "cliente.pesquisa@teste.com",
      endereco: "Rua de Teste",
      numeroResidencia: "101",
      complemento: "Bloco A",
      pais: "Brasil",
      genero: "Masculino",
      ferramentas: ["Cypress", "Postman"],
      foto: "cypress/fixtures/test_image.jpg",
    };

    // **Cadastrando o cliente**
    cy.log("Cadastrando novo cliente...");
    CadastroClientePage.preencherFormulario(novoCliente);
    CadastroClientePage.salvar();

    // Garantir que o cliente foi cadastrado com sucesso
    cy.contains("Cliente cadastrado com sucesso", { timeout: 10000 }).should("be.visible");

    // **Pesquisando pelo cliente cadastrado**
    cy.log("Pesquisando cliente recém-cadastrado...");
    cy.get('input[placeholder="Pesquisar por nome"]')
      .clear()
      .type(novoCliente.nomeCompleto); // Digitar o nome completo do cliente

    cy.get("#button-addon2").scrollIntoView().click(); // Clicar no botão "Pesquisar"

    // **Validando resultados da pesquisa**
    cy.contains("td", novoCliente.nomeCompleto, { timeout: 10000 }) // Verificar que o nome aparece na tabela
      .should("be.visible");
  });
});
