

describe("my first test", function(){
    it('does not much', function(){
        expect(true).to.equal(true)

        
    })
    // Arrange setup
        it('Test user registration', function(){
            cy.visit('https://www.masoko.com/customer/account/create/')
            cy.get('firstname').type('derrick')
            cy.get('lastname').type('muriithi')
            cy.get('mobile').type('+254797916850')
            cy.get('email').type('muriithiderrick56@gmail.com')
            cy.get('password1').type('pass1')
            cy.get('password2').type('pass1')
            cy.get('rememberme').click()
            cy.get('is_subscribed').check()
            cy.get('submit').click()
        })

})