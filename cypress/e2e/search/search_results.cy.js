describe("Busca - Cenários completos (Sênior)", () => {

    // Cenário: 1. Deve retornar artigos relevantes pelo endpoint de busca
    it("1. Deve retornar artigos relevantes pelo endpoint de busca", () => {
        cy.searchFor("cartão");

        cy.getArticles().should("have.length.greaterThan", 0);

        cy.getArticleTitles().each(($title) => {
            expect($title.text().toLowerCase()).to.include("cart");
        });
    });

    // Cenário: 2. Deve exibir estado vazio quando nenhum resultado é encontrado
    it("2. Deve exibir estado vazio quando nenhum resultado é encontrado", () => {
        cy.searchFor("xptoInexistente123123");

        // página é de busca
        cy.url().should("include", "?s=");

        // nenhum artigo encontrado
        cy.get("article").should("have.length", 0);
    });


    // Cenário: 3. Cada artigo deve possuir metadados mínimos (thumbnail, título e categoria via classe)
    it("3. Cada artigo deve possuir metadados mínimos (thumbnail, título e categoria via classe)", () => {
        cy.searchFor("emprestimo");

        cy.getArticles().each(($article) => {

            // título deve existir
            cy.wrap($article)
                .find("h2, h3")
                .should("exist");

            // imagem destacada (thumbnail)
            cy.wrap($article)
                .find("img")
                .should("exist");

            // categoria deve existir na classe do article (ex: category-emprestimos)
            cy.wrap($article)
                .invoke("attr", "class")
                .should("match", /category-/);
        });
    });


    // Cenário: 4. Todos os links devem retornar HTTP 200
    it("4. Todos os links devem retornar HTTP 200", () => {
        cy.searchFor("cartão");

        cy.getArticles().then(($articles) => {

            if ($articles.length === 0) {
                cy.log("Nenhum artigo encontrado — fluxo considerado válido para Agibank.");
                return;
            }

            // Agora iteramos por índice (NÃO por referência DOM antiga)
            for (let i = 0; i < $articles.length; i++) {

                cy.get("article").eq(i).within(() => {

                    // Buscar link novo dentro do article atualizado no DOM
                    cy.get("a").first().then(($a) => {
                        const href = $a.prop("href");

                        cy.request(href)
                            .its("status")
                            .should("eq", 200);
                    });
                });
            }
        });
    });

    // Cenário: 5. Busca deve responder em menos de 2.5s
    it("5. Busca deve responder em menos de 2.5s", () => {
        let start = performance.now();

        cy.searchFor("cartão"); // via URL ?s=

        cy.get("article") // carregamento concluído
            .should("exist")
            .then(() => {
                let end = performance.now();
                let duration = end - start;

                cy.log("⏱ Tempo total:", duration);

                expect(duration).to.be.lessThan(2500);
            });
    });

});