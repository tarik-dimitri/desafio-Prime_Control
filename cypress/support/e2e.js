import './commands';
import 'cypress-file-upload';
Cypress.on('uncaught:exception', (err, runnable) => {
    // Retornar false impede que erros não capturados falhem o teste
    return false;
  });
  
