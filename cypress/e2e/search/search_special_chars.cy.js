describe("Busca - XSS, Unicode e caracteres especiais", () => {

    // Cenário: Sistema mantém estabilidade mesmo com entradas maliciosas
    it("Sistema mantém estabilidade mesmo com entradas maliciosas", () => {
        cy.fixture("invalidTerms").then(({ specialChars }) => {

            specialChars.forEach((term) => {

                const url = `/?s=${encodeURIComponent(term)}`;

                cy.visit(url, { failOnStatusCode: false });

                // Página deve continuar visível
                cy.get("body").should("be.visible");

                // Nenhuma quebra crítica
                cy.contains("Fatal error").should("not.exist");
                cy.contains("Warning").should("not.exist");
                cy.contains("Notice").should("not.exist");

                // URL deve ser estável
                cy.url().should("include", "?s=");

            });

        });
    });

});