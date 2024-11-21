class CadastroClientePage {
    // Locators
    elements = {
      inputNomeCompleto: () =>
        cy.get('.col-md-9 > .form-control').eq(0),
      inputTelefone: () =>
        cy.get(':nth-child(2) > .row > :nth-child(1) > .form-control'),
      inputEmail: () =>
        cy.get(':nth-child(2) > .row > :nth-child(2) > .form-control'),
      inputCep: () =>
        cy.get(':nth-child(3) > .row > :nth-child(1) > .form-control'),
      inputNumeroResidencia: () =>
        cy.get(':nth-child(3) > .row > :nth-child(2) > .form-control'),
      inputEndereco: () =>
        cy.get(':nth-child(4) > .row > :nth-child(1) > .form-control'),
      inputComplemento: () =>
        cy.get(':nth-child(4) > .row > :nth-child(2) > .form-control'),
      selectPais: () => cy.get('select.form-control[required]'),
      radioGenero: (genero) =>
        cy.get(':nth-child(5) > div > :nth-child(1) > input')
          .parent() // Vai para o elemento pai
          .find('input[type="radio"]'), // Encontra o input do botão de rádio
      checkboxFerramenta: (ferramenta) =>
        cy.get(':nth-child(6) > div > :nth-child(1) > input'),
      buttonAddImage: () => cy.get('.add-image-button'), // Ajuste conforme seletor do botão
      inputFileUpload: () => cy.get('input[type="file"]'),
      buttonSalvar: () => cy.contains("Salvar"),
    };
  
    // Methods
    preencherFormulario(dados) {
      this.elements.inputNomeCompleto().scrollIntoView().click().type(dados.nomeCompleto);
      this.elements.inputTelefone().scrollIntoView().click().type(dados.telefone);
      this.elements.inputCep().scrollIntoView().click().type(dados.cep);
      this.elements.inputEmail().scrollIntoView().click().type(dados.email);
      this.elements.inputEndereco().scrollIntoView().click().type(dados.endereco);
      this.elements.inputNumeroResidencia().scrollIntoView().click().type(dados.numeroResidencia);
      this.elements.inputComplemento().scrollIntoView().click().type(dados.complemento);
      this.elements.selectPais().scrollIntoView().select(dados.pais);
      this.elements.radioGenero(dados.genero).click().check(); // Marca o botão de rádio
    
      dados.ferramentas.forEach((ferramenta) => {
        this.elements.checkboxFerramenta(ferramenta).scrollIntoView().click().check();
      });
  
      this.elements.buttonAddImage().scrollIntoView().click(); // Adiciona imagem
      this.elements.inputFileUpload().attachFile('test_image.jpg');
    }
  
    salvar() {
      cy.get('button').contains('Salvar').scrollIntoView().click();
    }
  }
  
  module.exports = new CadastroClientePage();
  