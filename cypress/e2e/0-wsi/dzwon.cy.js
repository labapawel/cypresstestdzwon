describe("Test systemu Dzwon", ()=>{

    beforeEach( ()=>{
        cy.visit('http://localhost:81/')
    })

    it("Testowanie Logowania", ()=>{
        cy.get('.login input[type=text]')
            //.type('admin').should('have.value', 'admin')
            .type('admin', { delay: 100 })
        cy.get('.login input[type=password]')
                .type('admin', { delay: 100 })
    
        cy.get('.login input[type=button]').click();        

      let status = "";
        cy.get('.alarmdisable')
            .invoke('text')
            .then(text=>{
                cy.log(text);
   //             console.log(text);
                status = text;
            })
        cy.wait(1000);
        if(status == "ON"){
            cy.get('.alarmdisable')
            .click()
            .wait(1000)
            .should('have.class','btn-danger')
                .and('text','OFF');

        }    

        // console.log(alarm);

    });
});