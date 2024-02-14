

describe('Test wsi.edu.pl', ()=>{
    beforeEach( ()=>{
        cy.visit('https://www.technikum.wsi.edu.pl/')
    })

    it('Sprawdzenie czy jest strona w UTF-8', ()=>{
        cy.document().should('have.property','charset').and('eq', 'UTF-8')
    })

    it("Sprawdzenie komunikatu cookies", ()=>{
        cy.get('.cookie-notice-container')
             .should('have.length', 1);

        cy.get('#cn-accept-cookie')
            .click();

        cy.get('#cookie-notice')
            .should('not.have.css', 'display', 'none');

    })


})