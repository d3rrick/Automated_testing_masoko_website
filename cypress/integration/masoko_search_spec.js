describe("my first test", function(){
    it('does not much', function(){
        expect(true).to.equal(true)

        
    })
    // Arrange setup
        it('Visit safaricom landing page', function(){
            cy.visit('https://www.masoko.com/')
            cy.get('input').type('search').should('have.value', 'search for products and services')
        
        })
        // Act

        // Assert
})