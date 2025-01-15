import Userinfo from "../fixtures/avtorizacia.json"

describe('FP-9avtorizacia', () => {
  it('avtorizacia', () => {
    

    //1. გახსენი საიტი.
    cy.visit("https://testzootopia.loremipsum.ge/ka")
//გაიხსნა საიტის მთავარი გვერდი.
//2.დააჭირე მარჯვენა კუთხეში არსებულ ღილაკს “შესვლა”.
cy.get('.menu-pop > .rprof').click()
//გამოჩნდა ავტორიზაციის ფანჯარა.
//3.შეიყვანე ელ.ფოსტა და პაროლი, დააჭირე ავტორიზაციის ღილაკს
//Test Data:
//ელ.ფოსტა-anaartilakva1@gmail.com
//პაროლი- Anushka123
cy.get(':nth-child(5) > .imail').type(Userinfo.correctemail)
cy.get('.ipass').type(Userinfo.correctpassword)
cy.get('.avtorization > .input-shablon > .form-button').click()
//გაიხსნა მთავარი გვერდი, სადაც მარჯვენა ზედა კუთხეში “შესვლა” ღილაკის
//ნაცვლად გამოჩნდება ღილაკი: “ჩემი გვერდი”.
cy.get('.menu-pop > .iprof').should('be.visible')
  })
})