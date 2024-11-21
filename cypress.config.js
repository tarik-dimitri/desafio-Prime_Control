
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    env: {
      baseUrls: {
        web: "https://challenge.primecontrol.com.br",
        api: "https://api-challenge.primecontrol.com.br",
      },
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
  },
});
