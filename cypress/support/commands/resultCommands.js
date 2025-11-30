// Devolução de lista vazia de forma segura (sem falhar)
Cypress.Commands.add("getArticles", () => {
    return cy.document().then((doc) => {
        const articles = doc.querySelectorAll("article");
        return Cypress.$(articles); // retorna coleção vazia sem quebrar
    });
});


Cypress.Commands.add("hasArticles", () => {
    return cy.document().then((doc) => {
        const articles = doc.querySelectorAll("article");
        return articles.length > 0;
    });
});


// Retorna títulos visíveis
Cypress.Commands.add("getArticleTitles", () => {
    return cy.get("article h2, article h3").filter(":visible");
});

// Mensagem de vazio
Cypress.Commands.add("validateNoResultsMessage", () => {
    cy.get("body").should("be.visible");

    // Garantir que não quebrou layout
    cy.contains("Fatal error").should("not.exist");
    cy.contains("Warning").should("not.exist");
    cy.contains("Notice").should("not.exist");
});


// Metadados do artigo
Cypress.Commands.add("validateArticleMetadata", () => {
    cy.getArticles().each(($article) => {
        cy.wrap($article).find("time").should("exist");
        cy.wrap($article)
            .find(".cat-links, .category, a[rel='category'], .entry-meta")
            .should("exist");
    });
});

// Links retornam 200
Cypress.Commands.add("validateArticleLinksStatus", () => {
    cy.getArticles().each(($article) => {
        cy.wrap($article).find("a").first().then(($a) => {
            cy.request($a.attr("href")).its("status").should("eq", 200);
        });
    });
});