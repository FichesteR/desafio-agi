import './commands';

Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes("astra") ||
    err.message.includes("gtag") ||
    err.message.includes("not defined")
  ) {
    return false;
  }
});
