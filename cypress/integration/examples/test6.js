describe('My First Test', () => {
    it('Does not do much!', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products:visible').find('.product').each(($el, index, $list) => {

           const vegname= $el.find('h4.product-name').text()
           console.log(vegname)
            if(vegname.includes('Cashews'))
            {
                $el.find('button').click()
            }
        })
})
  })