describe('Moj pierwszy test', ()=>{
    beforeEach( ()=>{
        cy.visit('https://www.onet.pl/')
    })

    it("Potwierdzenie ustawień i PP", ()=>{
        cy.get('.cmp-intro_intro .cmp-intro_options button')
        .last()
        .click();


        cy.get('.cmp-intro_intro')
            .should('not.have.css', 'display', 'none');
    })

    it("Sprawdzenie czy jest logo onet.pl", ()=>{
        cy.get('header h1 svg')
        .should('have.length', 1);
    })
})