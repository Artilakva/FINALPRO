Cypress.Commands.add('avtorizacia', (email, password) => { 
    cy.get('.menu-pop > .rprof').click()
    cy.get(':nth-child(5) > .imail').type("anaartilakva1@gmail.com")
    cy.get('.input-shablon > :nth-child(6) > .ipass').type("Anushka123")
    cy.get('.avtorization > .input-shablon > .form-button').click()
    cy.get('.menu-pop > .iprof').should('be.visible')

})