describe('Inscription Failed', () => {
    it('Jeanne Oskour', () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')


        // Register
        cy.get('[data-qa=accept-cta]').click()

        // Get an input, type into it
        cy.get('#firstName').type('Jeanne')
        //  Verify that the value has been updated
        cy.get('#firstName').then(actualValue => {
            expect(actualValue).to.have.value('Jeanne')
        })

        // Get an input, type into it
        cy.get('#lastName').type('Oskour')
        //  Verify that the value has been updated
        cy.get('#lastName').then(actualValue => {
            expect(actualValue).to.have.value('Oskour')
        })

        // Get an input, type into it
        cy.get('#signup-email').type("oskour.jeanne@gmail.com")
        //  Verify that the value has been updated
        cy.get('#signup-email').then(actualValue => {
            expect(actualValue).to.have.value("oskour.jeanne@gmail.com")
        })

        // Get an input, type into it
        cy.get('#signup-password').type('ssss2ZEEEEE33')
        //  Verify that the value has been updated
        cy.get('#signup-password').then(actualValue => {
            expect(actualValue).to.have.value('ssss2ZEEEEE33')
        })

        // Register
        cy.get('[data-qa=signup-submit-button]').click()
        // Vérify the URL after click
        cy.url().should('include', '/register')

    })
})