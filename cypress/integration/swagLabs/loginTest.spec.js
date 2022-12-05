

import {loginTest} from "../swagLabsClass/login.class"

describe('Test for the Login page', () => {

    beforeEach('resolution', () => {
        cy.navigation()
    })

    before('url test', () => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('login test', () => {       
        loginTest()
    })

})