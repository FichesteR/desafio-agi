// Navegação base – sempre leva ao domínio final após o redirect
Cypress.Commands.add("visitHome", () => {
    cy.visit("/");
    cy.url().should("include", "blog.agibank.com.br");
});
