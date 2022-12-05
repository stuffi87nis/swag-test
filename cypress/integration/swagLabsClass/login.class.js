import {userInfoData, failUserInfoData} from '../../fixtures/userInfo'
import {errorMessagesData} from '../../fixtures/errorMessages'

import {loginElements, errorElements} from '../../support/pom/login'


export function testForUsernameValidation(){

    if(cy.get(loginElements.loginButton).click()){
        cy.get(errorElements.errorMessage).should('have.text', errorMessagesData.userNameRequired)
    }
}

export function passwordValidationTest(){
    cy.get(loginElements.userNameField).type(userInfoData.username).then(() => {
        if(cy.get(loginElements.loginButton).click()){
            cy.get(errorElements.errorMessage).should('have.text', errorMessagesData.passwordRequired)
        }
    })
}



export function testLoginWhenUserIsLockedOut(){
    cy.get(loginElements.userNameField).clear()
    cy.get(loginElements.passwordField).clear()

    cy.get(loginElements.userNameField).type(failUserInfoData.usernameFail)
    cy.get(loginElements.passwordField).type(userInfoData.password)

    cy.get(loginElements.loginButton).click().then(() => {
        cy.get(errorElements.errorFieldsElement)
        .should('exist')
        .should('be.visible')
        cy.get(errorElements.containerWithErrorMessage).should('exist')

        cy.get(errorElements.errorMessage).should('have.text', errorMessagesData.lockedUserError)
    })

    cy.get(errorElements.buttonToCloseErrorMessage).click()
}

export function wrongPasswordAndUserName(){
    cy.get(loginElements.userNameField).clear()
    cy.get(loginElements.passwordField).clear()

    cy.get(loginElements.userNameField).type(userInfoData.wrongUser)
    cy.get(loginElements.passwordField).type(userInfoData.wrongPassword)
    cy.get(loginElements.loginButton).click()
    cy.get(errorElements.errorMessage).should('have.text', errorMessagesData.usernameAndPasswordError)
}