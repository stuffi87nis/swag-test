import {
    testLoginWhenUserIsLockedOut,
    testForUsernameValidation,
    passwordValidationTest,
    wrongPasswordAndUserName
} from "../swagLabsFunctions/login.functions"

describe('Test for the Login page', () => {

    beforeEach('resolution', () => {
        cy.navigation()
    })

    before('url test', () => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('1.test the validation for username', () => {
        testForUsernameValidation()
    })

    it('2.test the validation for password', () => {       
        passwordValidationTest()
    })

    it('3.test the invalid username login test', () => {       
        testLoginWhenUserIsLockedOut()
    })

    it('4.test the login when the username and password are invalid', () => {
        wrongPasswordAndUserName()
    })

})