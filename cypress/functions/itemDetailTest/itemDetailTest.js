import {
    inventoryElements, 
    addToCartButton, 
    cartLinkElement, 
    removeButton
} from '../../support/pom/inventory'

import {
    itemDetailsData,
    buttonNameData
} from '../../fixtures/inventoryDetails'

export function itemPageTest(){
    cy.get(inventoryElements.containerForItems).children().find(inventoryElements.imgLink).click()

    cy.get(inventoryElements.imageDetail).should('be.visible')

    cy.get(inventoryElements.inventoryDetailContainer)
    .should('contain', itemDetailsData.itemPrice)
    .and('contain', itemDetailsData.titleOfProduct)
    .and('contain', buttonNameData.addToCart)
    .and('contain', itemDetailsData.descriptionOfProduct)

    cy.get('[alt="Sauce Labs Backpack"]')
    .should('be.visible')
    .and(($img) => {
    // "naturalWidth" and "naturalHeight" are set when the image loads
    expect($img[0].naturalWidth).to.be.greaterThan(0)
    })

}

export function orderItemAndRemove(){

    cy.get(addToCartButton.sauceLabBackPackAddButton).click().then((item) => {
        let numOfItem
        cy.get(cartLinkElement.numberOfItemsLink).then((value) => {
            numOfItem = value[0].innerText
            expect(item.length).to.be.eq(Number(numOfItem))
        })
    })

    cy.get(removeButton.sauceLabBackPackRemoveButton).click().then(() => {
        
        cy.get(cartLinkElement.numberOfItemsLink).should('not.exist')
    })
}