/// <reference types="cypress" />

// its default behavior is to pass the test
describe('shivani', () => {
    it('test one', () => {})
})

// opening some urls
describe('basic test', () => {
    it('webpage loads', () => {
        cy.viewport(1280, 720)
        cy.visit('http://codedamn.com')

        // mocha
        // way 1 - brittle
        // cy.contains('Start learning').should('exist')

        // way 2 - brittle
        // cy.get('.asyncComponent > div > a')

        // way 3 - good
        // cy.get('[data-testid=menutoggle]').click()

        // cy.contains('Create Account').click()
    })

    it('loginpage looks good', () => {
        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com')
        cy.contains('Sign In').click()
        cy.log('going to forgot password')
        // cy.contains('Login with your credentials').should('exist')
        // cy.contains('Go with Google').should('exist')
        // cy.contains('Go with Facebook').should('exist')
        cy.contains('Forgot password').click()
        cy.url().should('include', '/password-reset')

        cy.url().then((value) => {
            cy.log('The current url:', value)
        })
        cy.go('back')
        cy.contains('Register an account').click()
        cy.url().should('include', '/register')

    })

    it.only('Login should work fine', () => {
        cy.viewport(1280, 720)
        cy.visit('https://codedamn.com')

        cy.contains('Sign In').click()

        cy.get('[data-testid=username]').type('admin')
        cy.get('[data-testid=password]').type('admin')

        cy.get('[data-testid="login"]').click()
    })
})

// describe('2nd test', () => {
//     it('we have the correct page title', () => {
//         cy.visit('https://ayush-pwa-hackfromthepast.netlify.app/')

//         // mocha
//         // cy.contains('Search').should('exist')
//         cy.get('div#root').should('exist')
//     })
// })