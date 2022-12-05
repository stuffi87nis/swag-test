import {
    addToCartButton,
    cartLinkElement,
    removeButton,
    cartElements
} from '../../support/pom/inventory'

describe('this is the new test', () => {

    beforeEach('url test', () => {
        cy.navigation()
    })

    before('login test', () => {       
        cy.loginTest()
    })

    it('1.Order items', () => {

        cy.get(addToCartButton.sauceLabBackPackAddButton).click()
        cy.get(removeButton.sauceLabBackPackRemoveButton).should('exist').should('be.visible')

        cy.get(addToCartButton.sauceLabBikeLightAddButton).click()
        cy.get(removeButton.sauceLabBikeLightRemoveButton).should('exist').should('be.visible')

        cy.get(addToCartButton.sauceBoltTShirtAddButton).click()
        cy.get(removeButton.sauceBoltTShirtRemoveButton).should('exist').should('be.visible')

        cy.get(addToCartButton.sauceLabsFleeJacketAddButton).click()
        cy.get(removeButton.sauceLabsFleeJacketRemoveButton).should('exist').should('be.visible')

        cy.get(addToCartButton.sauceLabsOnesieAddButton).click()
        cy.get(removeButton.sauceLabsOnesieRemoveButton).should('exist').should('be.visible')

        cy.get(addToCartButton.sauceRedTshirt).click()
        cy.get(removeButton.sauceRedTshirtRemoveButton).should('exist').should('be.visible')

        cy.get(cartLinkElement.cartLink).click()
    })

    
  it('2.Cart test', () => {
   
    cy.url().should('include', '/cart.html')

    cy.get(cartElements.itemsInCartList).children().then(() => {
        cy.get(cartElements.cartItem).then((item) => {
            for(let i = 0; i < item.length; i++){
                cy.get(cartElements.infroAboutItem)
                  .eq(i)
                  .find('div')
                  .eq(1)
                  
            }
        })
    })   
    
  })

  it('3.Compare order with cart test', () => {

    let notificationNum;

    cy.get(cartLinkElement.cartLink).then((value) => {
        notificationNum = value[0].innerText
    }).then(() => {
        cy.get(cartElements.itemsInCartList).children().then(() => {
            cy.get(cartElements.cartItem).then((item) => {
                expect(item.length).to.be.eq(Number(notificationNum))
                for(let i = 0; i < item.length; i++){
                    cy.get('div')
                    .eq(i)
                    .find('div')
                    .eq(1)
                }
            })
        })
    })

  })
    
  
   
})