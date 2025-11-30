const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.blogdoagi.com.br",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) { },
  },
});