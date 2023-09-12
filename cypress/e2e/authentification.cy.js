describe('Inscription Successful', () => {
    it('Gérard Bouchard', () => {
        cy.visit('https://preprod.backmarket.fr/fr-fr/register')

        // Register
        cy.get('[data-qa=accept-cta]').click()

        // Get an input, type into it
        cy.get('#signin-email').type('bouchard.gersssard@hotmail.com')
        //  Verify that the value has been updated
        cy.get('input[id="signin-email"]').then(actualValue => {
            expect(actualValue).to.have.value('bouchard.gersssard@hotmail.com')
        })

        // Get an input, type into it
        cy.get('#signin-password').type('1Sacrémotdepassevraimentlongmaispascompliqué')
        //  Verify that the value has been updated
        cy.get('input[id="signin-password"]').then(actualValue => {
            expect(actualValue).to.have.value('1Sacrémotdepassevraimentlongmaispascompliqué')
        })

        // Register
        cy.get('[data-qa=signin-submit-button]').click()
        // Vérify the URL after click
        cy.url().should('include', '/dashboard')

    })
})