import {checkTheFieldsInCheckoutPage, testTheValidationInCheckoutPage} from "../swagLabsClass/checkout.class"

describe('Test for the checkout page', () => {

    beforeEach('url test', () => {
        cy.navigation()
    })

    before('login test', () => {       
        cy.loginTest()
    })

    it('1.checkout test', () => {
        checkTheFieldsInCheckoutPage()
    })


    it('2.validation for the fields test', () => {
        testTheValidationInCheckoutPage()
    })
})