Cypress.Commands.add("validateResponsiveLayout", () => {
    cy.get("body").should(($body) => {
        expect($body.width()).to.be.greaterThan(300);
    });

    // layout AMP não deve quebrar
    cy.get("header").should("be.visible");
});
