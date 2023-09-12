describe('Inscription Successful', () => {
    it('Gérard Bouchard', () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')

        // Register
        cy.get('[data-qa=accept-cta]').click()

        // Get an input, type into it
        cy.get('#firstName').type('Gérard')
        //  Verify that the value has been updated
        cy.get('input[id="firstName"]').should('have.value', 'Gérard')

        // Get an input, type into it
        cy.get('#lastName').type('Bouchard')
        //  Verify that the value has been updated
        cy.get('input[id="lastName"]').then(actualValue => {
            expect(actualValue).to.have.value('Bouchard')
        })

        // Get an input, type into it
        cy.get('#signup-email').type('bouchard.gersssard@hotmail.com')
        //  Verify that the value has been updated
        cy.get('input[id="signup-email"]').then(actualValue => {
            expect(actualValue).to.have.value('bouchard.gersssard@hotmail.com')
        })

        // Get an input, type into it
        cy.get('#signup-password').type('1Sacrémotdepassevraimentlongmaispascompliqué')
        //  Verify that the value has been updated
        cy.get('input[id="signup-password"]').then(actualValue => {
            expect(actualValue).to.have.value('1Sacrémotdepassevraimentlongmaispascompliqué')
        })

        // Register
        cy.get('[data-qa=signup-submit-button]').click()
        // Vérify the URL after click
        cy.url().should('include', '/dashboard')

    })
})