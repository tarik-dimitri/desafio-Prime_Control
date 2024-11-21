describe("Testes do endpoint /deleteClient", () => {
    const baseUrl = Cypress.env("baseUrls").api;

    beforeEach(() => {
        // Cadastrar um cliente para obter o ID
        cy.request("POST", `${baseUrl}/addClient`, {
            nome: "Cliente para Deletar",
            email: "delete@cliente.com",
            fone: "123456789",
            fotoPerfil: "http://example.com/foto.jpg",
            cep: "12345-678",
            endereco: "Rua Teste",
            complemento: "Apto 101",
            pais: "Brasil",
            genero: "Masculino",
            ferramentas: ["Cypress", "Postman"],
        }).then((response) => {
            expect(response.status).to.eq(200);
            Cypress.env("clientId", response.body.id); // Armazenar o ID
        });
    });

    // Scenario: Excluir cliente com sucesso
    // Given que existe um cliente cadastrado no sistema
    // When envio uma solicitação para excluir o cliente
    // Then o cliente deve ser excluído com sucesso
    it("CT001 - Deve excluir um cliente com sucesso", () => {
        const clientId = Cypress.env("clientId");
        cy.request("DELETE", `${baseUrl}/deleteClient/${clientId}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq("Cliente excluído com sucesso!");
        });
    });

    // Scenario: Excluir cliente inexistente
    // Given que o cliente informado não existe no sistema
    // When envio uma solicitação para excluir o cliente
    // Then deve retornar uma mensagem de erro indicando que o cliente não foi encontrado

    it("CT002 - Deve retornar erro ao tentar excluir cliente inexistente", () => {
        const invalidClientId = "00000";
        cy.request({
            method: "DELETE",
            url: `${baseUrl}/deleteClient/${invalidClientId}`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.message).to.eq("Cliente não encontrado.");
        });
    });

    // Scenario: Excluir sem fornecer ID
    // Given que nenhum ID foi fornecido na solicitação
    // When envio uma solicitação para excluir o cliente
    // Then deve retornar uma mensagem de erro indicando que o cliente não foi encontrado

    it("CT003 - Deve retornar erro ao excluir sem ID", () => {
        const invalidClientId = "id-invalido";
    
        cy.request({
            method: "DELETE",
            url: `${Cypress.env("baseUrls").api}/deleteClient/{}`,
            failOnStatusCode: false, // Permite capturar respostas com erro
        }).then((response) => {
            // Valida o status HTTP 404
            expect(response.status).to.eq(404);
    
            // Ajuste aqui para a propriedade correta (geralmente 'message')
            expect(response.body.message).to.eq("Cliente não encontrado.");
        });
    });
});