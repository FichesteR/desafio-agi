describe("Busca - Performance (SLA)", () => {

    beforeEach(() => cy.visitHome());

    // Cenário: Tempo de resposta deve ser inferior a 2500ms
    it("Tempo de resposta deve ser inferior a 2500ms", () => {
        cy.fixture("searchTerms").then(({ relatedTerm }) => {
            cy.measureSearchPerformance(relatedTerm, 2500);
        });
    });

});