const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    'defaultCommandTimeout':10000,
    env:{
      baseUrl: "https://qa.fgntreasury.gov.ng/"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
