import {
    
} from '../../support/pom/inventory'

export function itemPageTest(){
    cy.get('.inventory_list').children().find('#item_4_img_link').click()

    cy.get('.inventory_details_img').should('be.visible')

    cy.get('.inventory_details_desc_container')
    .should('contain', 'Add to cart')
    .and('contain','$' + '29.99')
    .and('contain', 'Sauce Labs Backpack')
    .and('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')

    cy.get('[alt="Sauce Labs Backpack"]')
    .should('be.visible')
    .and(($img) => {
    // "naturalWidth" and "naturalHeight" are set when the image loads
    expect($img[0].naturalWidth).to.be.greaterThan(0)
    })

}

export function orderItemAndRemove(){

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click().then((item) => {
        let numOfItem
        cy.get('.shopping_cart_badge').then((value) => {
            numOfItem = value[0].innerText
            expect(item.length).to.be.eq(Number(numOfItem))
        })
    })

    cy.get('[data-test="remove-sauce-labs-backpack"]').click().then(() => {
        
        cy.get('.shopping_cart_badge').should('not.exist')
    })
}