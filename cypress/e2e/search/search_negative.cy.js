describe("Busca - Resultados inexistentes", () => {

    // Cenário: Página se mantém estável e acessível sem resultados
    it("Página se mantém estável e acessível sem resultados", () => {

        cy.visit("/?s=xyzasd123nada", { failOnStatusCode: false });

        // Página carregou
        cy.get("body").should("be.visible");

        // Conteúdo mínimo de acessibilidade
        cy.get("header").should("exist");
        cy.get("main").should("exist");
        cy.get("h1, h2").first().should("be.visible");

        // Layout não quebrou
        cy.contains("Fatal error").should("not.exist");
        cy.contains("Warning").should("not.exist");

    });

});