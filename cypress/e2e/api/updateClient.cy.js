describe("Testes do endpoint /updateClient", () => {
    const baseUrl = Cypress.env("baseUrls").api;

    beforeEach(() => {
        // Cadastrar um cliente para obter o ID
        cy.request("POST", `${baseUrl}/addClient`, {
            nome: "Cliente para Atualizar",
            email: "update@cliente.com",
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

    // Scenario: Atualizar cliente com sucesso
    // Given que existe um cliente cadastrado no sistema
    // When envio uma solicitação para atualizar as informações do cliente
    // Then as informações do cliente devem ser atualizadas com sucesso
    it("CT001 - Deve atualizar um cliente com sucesso", () => {
        const clientId = Cypress.env("clientId");
        const updateData = {
            nome: "Cliente Atualizado",
            email: "atualizado@cliente.com",
            fone: "987654321",
        };

        cy.request("PUT", `${baseUrl}/updateClient/${clientId}`, updateData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq("Cliente atualizado com sucesso!");
        });
    });

    // Scenario: Atualizar cliente inexistente
    // Given que o cliente informado não existe no sistema
    // When envio uma solicitação para atualizar as informações do cliente
    // Then deve retornar uma mensagem de erro indicando que o cliente não foi encontrado

    it("CT002 - Deve retornar erro ao tentar atualizar cliente inexistente", () => {
        const invalidClientId = "07fUPulDHWAKF29mcgX1"; // ID inválido
        const updateData = {
            nome: "Cliente Inexistente",
        };
    
        cy.request({
            method: "PUT",
            url: `${baseUrl}/updateClient/${invalidClientId}`,
            body: updateData,
            failOnStatusCode: false, // Para capturar a resposta mesmo com erro
        }).then((response) => {
            expect(response.status).to.eq(500); // Validar o status de erro
            expect(response.body.message).to.contain(
                "Error updating client: 5 NOT_FOUND"
            ); // Validar a mensagem de erro
        });
    });

    // Scenario: Atualizar cliente sem informações obrigatórias
    // Given que o corpo da solicitação não possui todas as informações obrigatórias
    // When envio uma solicitação para atualizar as informações do cliente
    // Then deve retornar uma mensagem de erro indicando os campos ausentes

    it("CT003 - Deve retornar erro ao não enviar campos para atualização", () => {
        const validClientId = "ID_DO_CLIENTE_EXISTENTE"; 
    
        cy.request({
            method: "PUT",
            url: `${Cypress.env("baseUrls").api}/updateClient/${validClientId}`,
            body: {}, // Body vazio para simular o erro
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(400); // Valida o status de erro
            expect(response.body.message).to.eq("Informe ao menos um campo para atualizar"); // Valida a mensagem de erro
        });
    });
    
});