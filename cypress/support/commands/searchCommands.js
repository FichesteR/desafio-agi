Cypress.Commands.add("searchFor", (term) => {
    cy.visit(`/?s=${encodeURIComponent(term)}`);
});

Cypress.Commands.add("getArticles", () => {
    return cy.get("article").should("exist");
});

Cypress.Commands.add("getArticleTitles", () => {
    return cy.get("article h2, article h3").should("exist");
});
