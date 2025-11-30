const devices = [
    "iphone-se2",
    "iphone-x",
    "iphone-8",
    "ipad-2",
    "macbook-13",
    "macbook-15",
    "samsung-s10",
];

describe("Busca - Responsividade (multi-devices)", () => {

    devices.forEach((device) => {

        // Cenário: Deve manter estabilidade e layout no device: ${device}
        it(`Deve manter estabilidade e layout no device: ${device}`, () => {

            cy.viewport(device);
            cy.visitHome();

            // Header sempre deve existir em qualquer resolução
            cy.get("header").should("be.visible");

            // O botão/menu de busca existe no header
            cy.get('.ast-search-icon, button.search-submit')
                .should("exist");

            // Nunca deve quebrar layout
            cy.contains("Fatal error").should("not.exist");
            cy.contains("Warning").should("not.exist");
        });

    });

});