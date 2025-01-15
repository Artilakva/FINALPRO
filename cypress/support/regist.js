Cypress.Commands.add('regist', (email, password) => { 
    cy.get('.menu-pop > .rprof').click()
    cy.get('.input-shablon > p > a').click()
    cy.get(':nth-child(1) > .ismile').click().type("Ana Artilakva")
    cy.get(':nth-child(2) > .imail').click().type("anaartilakva1@gmail.com")
    cy.get('.ipir').click().type("01005039690")
    cy.get(':nth-child(4) > .itel').click().type("599006923")
    cy.get(':nth-child(5) > .ipass').click().type("Anushka123")
    cy.get('.reg-form-left > :nth-child(6) > .ipass').click().type("Anushka123")
    cy.get('.etx > svg').click()
    cy.get('.regsub').click()

})