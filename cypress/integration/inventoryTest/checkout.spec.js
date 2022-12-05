import {userCheckoutData} from "../../fixtures/userInfo"

import {
    cartLinkElement,
    checkOutElements,
    checkOutErrorMessages
} from '../../support/pom/inventory'
describe('this is the new test', () => {

    beforeEach('url test', () => {
        cy.navigation()
    })

    before('login test', () => {       
        cy.loginTest()
    })

    it('1.checkout test', () => {

        cy.get(cartLinkElement.cartLink).click()
        cy.get(checkOutElements.checkOutButton).click()

        cy.get(checkOutElements.fristNameCheckOut).should('be.visible').should('exist')
        cy.get(checkOutElements.lastNameCheckOut).should('be.visible').should('exist')
        cy.get(checkOutElements.zipCodeCheckout).should('be.visible').should('exist')
       
    })


    it('2.validation for the fields test', () => {
        
        cy.get(checkOutElements.continueCheckOutButton).click().then(() => {
            if(cy.get(checkOutElements.fristNameCheckOut).should('be.empty')){
                cy.get(checkOutErrorMessages.errorMessageCheckOut).should('have.text', 'Error: First Name is required')
            }
        })

        cy.get(checkOutElements.fristNameCheckOut).type(userCheckoutData.firstName)

        cy.get(checkOutElements.continueCheckOutButton).click().then(() => {
            if(cy.get(checkOutElements.lastNameCheckOut).should('be.empty')){
                cy.get(checkOutErrorMessages.errorMessageCheckOut).should('have.text', 'Error: Last Name is required')
            }
        })

        cy.get(checkOutElements.lastNameCheckOut).type(userCheckoutData.lastName)

        cy.get(checkOutElements.continueCheckOutButton).click().then(() => {
            if(cy.get(checkOutElements.zipCodeCheckout).should('be.empty')){
                cy.get(checkOutErrorMessages.errorMessageCheckOut).should('have.text', 'Error: Postal Code is required')
            }
            cy.get(checkOutElements.zipCodeCheckout).type(userCheckoutData.postalCode)

        })
        if(cy.get(checkOutElements.continueCheckOutButton).click()){
            cy.url().should('include', '/checkout-step-two.html')
        }

        if(cy.get(checkOutElements.finishCheckOutButton).click()){
            cy.url().should('include', '/checkout-complete.html')
        }
        cy.get(checkOutElements.backToHomeCheckoutButton).click()
    })
   
})