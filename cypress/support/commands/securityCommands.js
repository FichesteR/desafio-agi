Cypress.Commands.add("searchXSS", (payload) => {
    cy.visit(`/?s=${encodeURIComponent(payload)}`, { failOnStatusCode: false });
});

Cypress.Commands.add("validatePageLoaded", () => {
    cy.get("body").should("be.visible");
});
