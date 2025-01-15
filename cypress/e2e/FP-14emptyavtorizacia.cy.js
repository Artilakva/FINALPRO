import Userinfo from "../fixtures/avtorizacia.json"

describe('FP-14Emptyavtorizacia', () => {
  it('EmptyEmail', () => {
  
//1. გახსენი საიტი.
//გაიხსნა საიტის მთავარი გვერდი.
cy.visit("https://testzootopia.loremipsum.ge/ka")
cy.get('.b1 > h2').should('have.text','პროდუქტების ფართო არჩევანი')
//2.დააჭირე მარჯვენა კუთხეში არსებულ ღილაკს “შესვლა”.
//გამოჩნდა ავტორიზაციის ფანჯარა.
cy.get('.menu-pop > .rprof').click()
//3.შეყვანე ელ.ფოსტა და პაროლი, დააჭირე ავტორიზაციის ღილაკს.
//Test Data:
//ელ.ფოსტა-დატოვე ცარიელი
//პაროლი- Anushka123
cy.get('.ipass').type(Userinfo.correctpassword)
cy.get('.avtorization > .input-shablon > .form-button').click()
//გამოჩნდა პოპაპი შესაბამისი შეტყობინებით.
cy.get('.input-div.alert > .alert > img').should('be.visible')

  })
})
