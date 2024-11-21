const baseUrl = Cypress.env('baseUrls').web;
Cypress.Commands.add('login', (email, senha) => {
  cy.visit(baseUrl + "/app");
  cy.get('input[type="email"]').type(email);
  cy.get('input[type="password"]').type(senha);
  cy.contains('button', 'Acessar').click();
});

Cypress.Commands.add('logout', () => {
  cy.contains('button', 'Finalizar').click();
  cy.url().should('include', '/app');
});
