describe('FP-18Deletefromthecart', () => {
  it('deletefromcart', () => {

//1. გახსენი საიტი.
//გაიხსნა საიტის მთავარი გვერდი.
cy.visit("https://testzootopia.loremipsum.ge/ka")
//2.დააჭირე მარჯვენა კუთხეში არსებულ ღილაკს “შესვლა”.
//გამოჩნდა ავტორიზაციის ფანჯარა.
//3.შეყვანე ელ.ფოსტა და პაროლი, დააჭირე ავტორიზაციის ღილაკს.
//Test Data:
//ელ.ფოსტა-anaartilakva1@gmail.com
//პაროლი- Anushka123
//ავტორიზაცია წარმატებით დასრულდა და გაიხსნა მთავარი გევრდი.
cy.avtorizacia()
//4.საძიებო ველში ჩაწერე შემდეგი პროდუქტის დასახელება: SANICAT CLASSIC TR 10L EUR.
cy.get('.popsrch').click().type('SANICAT CLASSIC TR 10L EUR')
cy.get('.menu-pop .popsrch.active button').click()
cy.get('h2 > a').should('have.text', 'SANICAT CLASSIC TR 10L EUR')
cy.get('.product-cart').click()
//დააჭირე ზედა მარჯვენა კუთხეში არსებულ კალათას ლოგოს.
cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
//გაიხსნა კალათის გევრდი, სადაც დაგხვდება არჩეული პროდუქტი
cy.get('span.productCode').should('have.text', '#PSANCLAT010L31')
//6. დააჭირე პროდუქტის მარჯვენა ზედა მხარეს არსებულ პროდუქტის წაშლის
//ღილაკს.
cy.get('#Ellipse_42').should('be.visible').click()
//პროდუაცია წარმატებით წაიშალა.
//პროდუქტის წაშლის შემდეგ კალათა ცარიელია და გამოდის
//შესაბამისი შეტყობინება კალათის გვერდზე.
cy.contains('p', 'კალათა ცარიელია').should('be.visible')

  })
})