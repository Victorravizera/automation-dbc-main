const { defineConfig } = require("cypress");
const {env} = require('./cypress.env.js')
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dummyjson.com',
    setupNodeEvents(on, config) {
      config.env = env;
      return config;
    },
  },
})




