describe("Testes do endpoint /addClient", () => {
  const baseUrl = Cypress.env("baseUrls").api;

  // Scenario: Adicionar cliente com sucesso
  // Given que tenho todos os campos obrigatórios preenchidos
  // When envio uma solicitação para o endpoint /addClient
  // Then o cliente deve ser cadastrado com sucesso e um ID deve ser retornado
  it("CT001 - Deve adicionar um cliente com sucesso", () => {
    const clientData = {
      nome: "Teste Cliente",
      email: "teste@cliente.com",
      fone: "123456789",
      fotoPerfil: "http://example.com/foto.jpg",
      cep: "12345-678",
      endereco: "Rua Teste",
      complemento: "Apto 101",
      pais: "Brasil",
      genero: "Masculino",
      ferramentas: ["Cypress", "Postman"],
    };

    cy.request("POST", `${baseUrl}/addClient`, clientData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Cliente cadastrado com sucesso!");
      expect(response.body).to.have.property("id");
    });
  });

  // Scenario: Tentar cadastrar cliente com campo obrigatório vazio
  // Given que um dos campos obrigatórios está vazio
  // When envio uma solicitação para o endpoint /addClient
  // Then deve retornar uma mensagem de erro informando o campo ausente
  it("CT002 - Deve retornar erro ao deixar um campo obrigatório vazio", () => {
    const incompleteData = {
      email: "teste@cliente.com",
      fone: "123456789",
      fotoPerfil: "http://example.com/foto.jpg",
      cep: "12345-678",
      endereco: "Rua Teste",
      complemento: "Apto 101",
      pais: "Brasil",
      genero: "Masculino",
      ferramentas: ["Cypress", "Postman"],
    };

    cy.request({
      method: "POST",
      url: `${baseUrl}/addClient`,
      body: incompleteData,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("Informe o nome");
    });
  });

  // Scenario: Tentar cadastrar cliente com e-mail inválido
  // Given que o e-mail fornecido está em um formato inválido
  // When envio uma solicitação para o endpoint /addClient
  // Then deve retornar uma mensagem de erro indicando e-mail inválido
  it("CT003 - Deve retornar erro para e-mail inválido", () => {
    const invalidEmailData = {
      nome: "Teste Cliente",
      email: "invalidemail",
      fone: "123456789",
      fotoPerfil: "http://example.com/foto.jpg",
      cep: "12345-678",
      endereco: "Rua Teste",
      complemento: "Apto 101",
      pais: "Brasil",
      genero: "Masculino",
      ferramentas: ["Cypress", "Postman"],
    };

    cy.request({
      method: "POST",
      url: `${baseUrl}/addClient`,
      body: invalidEmailData,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("E-mail em formato inválido.");
    });
  });
});
