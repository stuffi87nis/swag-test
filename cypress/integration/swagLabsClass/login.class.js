import {userInfoData, failUserInfoData} from '../../fixtures/userInfo'
import {errorMessages} from '../../fixtures/errorMessages'

import {loginElements, errorElements} from '../../support/pom/login'


export function loginTest(){
    cy.get(loginElements.userNameField).type(failUserInfoData.usernameFail)
    cy.get(loginElements.passwordField).type(userInfoData.password)

    cy.get(loginElements.loginButton).click().then(() => {
        cy.get(errorElements.errorFieldsElement)
        .should('exist')
        .should('be.visible')
        cy.get(errorElements.containerWithErrorMessage).should('exist')

        cy.get(errorElements.errorMessage).should('have.text', errorMessages.lockedUserError)
    })

    cy.get(errorElements.buttonToCloseErrorMessage).click()
}
