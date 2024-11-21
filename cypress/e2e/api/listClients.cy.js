describe("Testes do endpoint /listClients", () => {
    const baseUrl = Cypress.env("baseUrls").api;

  // Scenario: Listar todos os clientes
  // Given que existem clientes cadastrados no sistema
  // When envio uma solicitação para o endpoint /listClients
  // Then devo receber uma lista contendo todos os clientes cadastrados  
    it("CT001 - Deve retornar uma lista de clientes com sucesso", () => {
      cy.request(`${baseUrl}/listClients`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array"); // Verifica se é um array
        expect(response.body.length).to.be.greaterThan(0); // Garante que há itens
      });
    });
  
  // Scenario: Listar clientes com informações específicas
  // Given que existem clientes cadastrados no sistema
  // When envio uma solicitação para o endpoint /listClients
  // Then devo receber a lista contendo os campos esperados para cada cliente
    it("CT002 - Deve validar a estrutura dos campos dos clientes", () => {
      cy.request(`${baseUrl}/listClients`).then((response) => {
        response.body.forEach((client) => {
          expect(client).to.have.all.keys("id", "nome", "email", "fone", "fotoPerfil");
        });
      });
    });

  // Scenario: Listar clientes quando não há registros
  // Given que não existem clientes cadastrados no sistema
  // When envio uma solicitação para o endpoint /listClients
  // Then devo receber um erro sinalizando que o endpoint está incorreto
      it("CT003 - Deve retornar erro 404 ao acessar um endpoint inexistente", () => {
      cy.request({
        url: `${baseUrl}/listClients/invalidEndpoint`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });
  