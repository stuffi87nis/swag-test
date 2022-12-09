// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {userInfoData, failUserInfoData} from '../fixtures/userInfo'
import {loginElements} from '../support/pom/login'

Cypress.Commands.add('navigation', () => {
    cy.viewport(2400, 1200)
})

Cypress.Commands.add('loginTest', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get(loginElements.userNameField).type(userInfoData.username)
        cy.get(loginElements.passwordField).type(userInfoData.password)
        cy.get(loginElements.loginButton).click()
        Cypress.Cookies.preserveOnce('session-username')  
})