Cypress.Commands.add("measureSearchPerformance", (term, maxMs = 2500) => {
    // Mede tempo de carregamento da página usando Navigation Timing API
    cy.window().then((win) => {
        const perf = win.performance.timing;
        const loadTime = perf.loadEventEnd - perf.navigationStart;

        cy.log("Page Load Time:", loadTime);

        // Regra Sênior: página deve carregar em menos de 3s
        expect(loadTime).to.be.lessThan(3000);
    });

});
