// Feature: Cadastro de Cliente
describe("Cadastro de Cliente", () => {
  const cadastroClientePage = require("../../page_objects/CadastroClientePage");

  beforeEach(() => {
    cy.viewport(1920, 1080); // Resolução para garantir visibilidade
    cy.login("teste@usuario.com", "senha123"); // Realizar o login
    cy.url({ timeout: 10000 }).should("include", "/app/home"); // Validação da tela de navegação correta
    cy.contains("Cadastrar Cliente").click(); // Acessar o formulário de cadastro de cliente
  });

  // Scenario: Cadastro de cliente com sucesso
  // Given que estou na aba de cadastro de cliente
  // When insiro informações válidas em todos os campos obrigatórios
  // Then o cliente deve ser cadastrado com sucesso

  it("Deve cadastrar cliente com sucesso", () => {
    cadastroClientePage.preencherFormulario({
      nomeCompleto: "João Silva",
      telefone: "1234567890",
      cep: "12345-678",
      email: "joao.silva@email.com",
      endereco: "Rua Exemplo",
      numeroResidencia: "123",
      complemento: "Apartamento 10",
      pais: "Brasil",
      genero: "Masculino",
      ferramentas: ["Robot Framework"],
      foto: "cypress/fixtures/test_image.jpg",
    });
    cadastroClientePage.salvar();
    cy.url({ timeout: 10000 }).should("include", "/app/home"); // Verifica a URL
    cy.contains("Pesquisar").should("be.visible"); // Verifica se o botão "Acessar" está visível
  });

  // Scenario: Cadastro de cliente com email inválido
  // Given que estou na aba de cadastro de cliente
  // When insiro um email inválido
  // Then devo ver uma mensagem de erro indicando que o email é inválido

  it("Deve exibir erro ao tentar cadastrar cliente com email inválido", () => {
    cadastroClientePage.preencherFormulario({
      nomeCompleto: "Luan Souza",
      telefone: "987654321",
      cep: "87654-321",
      email: "emailinvalido",
      endereco: "Avenida Teste",
      numeroResidencia: "456",
      complemento: "Casa",
      pais: "Brasil",
      genero: "Masculino",
      ferramentas: ["Robot Framework"],
      foto: "cypress/fixtures/test_image.jpg",
    });
    cadastroClientePage.salvar();
    cy.get('input[type="email"]') // Seleciona o campo de email
      .clear() // Limpa o valor atual
      .type('emailinvalido') // Insere um valor inválido
      .blur() // Tira o foco do campo para disparar a validação
      .invoke('prop', 'validationMessage') // Captura a mensagem de validação
      .should('contain', 'Inclua um "@" no endereço de e-mail'); // Valida parte do texto da mensagem
  });

  // Scenario: Validação de campos obrigatórios
  // Given que estou na aba de cadastro de cliente
  // When não preencho todos os campos obrigatórios
  // Then o botão "Salvar" não deve ser habilitado

  it("Deve validar que o botão 'Salvar' não é habilitado enquanto houver campos obrigatórios vazios", () => {
    
    cadastroClientePage.elements.buttonSalvar().should("be.disabled"); // Verifica que o botão "Salvar" está desabilitado inicialmente
    
    cadastroClientePage.elements.inputNomeCompleto().type("João Silva");
    cadastroClientePage.elements.inputTelefone().type("1234567890");
    cadastroClientePage.elements.inputCep().type("12345-678");
    cadastroClientePage.elements.inputEmail().type("joao.silva@email.com");
    cadastroClientePage.elements.buttonSalvar().should("be.disabled"); // Preenche alguns campos obrigatórios e verifica que o botão ainda está desabilitado

    cadastroClientePage.elements.inputEndereco().type("Rua Exemplo");
    cadastroClientePage.elements.inputNumeroResidencia().type("123");
    cadastroClientePage.elements.inputComplemento().type("Apartamento 10");
    cadastroClientePage.elements.selectPais().select("Brasil");
    cadastroClientePage.elements.radioGenero("Masculino").check();
    cadastroClientePage.elements.checkboxFerramenta("Robot Framework").check();
    cadastroClientePage.elements.buttonAddImage().click();
    cadastroClientePage.elements.inputFileUpload().attachFile("test_image.jpg"); 
    cadastroClientePage.elements.buttonSalvar().should("not.be.disabled"); // Preenche os campos restantes obrigatórios e verifica que o botão é habilitado
  });
});
