import {
    dropDownMenuElements, 
    menuForSortingitems, 
    inventoryElements,
    addToCartButton,
    cartLinkElement,
    removeButton
} from '../../support/pom/inventory'

export function dropDownMenuTest(){
    cy.url().should('include', '/inventory.html')
        cy.get(dropDownMenuElements.openDropDownMenu).click()
        cy.get(dropDownMenuElements.allItemsLink)
        .trigger('mouseover')
        .should('be.visible')  
        cy.get(dropDownMenuElements.aboutLink)
        .trigger('mouseover')
        .should('be.visible')
        cy.get(dropDownMenuElements.logOutLink)
        .trigger('mouseover')
        .should('be.visible')
        cy.get(dropDownMenuElements.resetAppStateLink)
        .trigger('mouseover')
        .should('be.visible')
        cy.get(dropDownMenuElements.buttonToCloseDropDownMenu).click()
};

export function sortingItemsTest(){
    if(cy.get(menuForSortingitems.linkForSortingItems).realClick()){
        cy.get(menuForSortingitems.linkForSortingItems).select('za')
        cy.get(menuForSortingitems.linkForSortingItems).select('lohi')
        cy.get(menuForSortingitems.linkForSortingItems).select('hilo')
        cy.get(menuForSortingitems.linkForSortingItems).select('az')
    }
};


export function numberOfItemsTest(){
    cy.get(inventoryElements.containerForItems).children().then((item) => {
        for(let i = 0; i < item.length; i++){
            cy.get(inventoryElements.itemsFromContainer)
              .eq(i)
              .find('div')
              .eq(1)
        }
    })
};

export function numberOfNotificationTest(){
     //select one item and compare with cart test
     cy.get(addToCartButton.sauceLabBackPackAddButton).click().then((item) => {
        let numOfPurchase;
        cy.get(cartLinkElement.numberOfItemsLink).then((value) =>{
            numOfPurchase = value[0].innerText;
          }).then(() => {
            expect(item.length).to.be.eq(Number(numOfPurchase));
            for(let i = 0; i < item.length; i++){
                cy.get('span')
                .eq(1)
             }
          })
    }) 
    cy.get(removeButton.sauceLabBackPackRemoveButton).click()                
    //select more items and compare with cart test
        cy.get(addToCartButton.sauceLabBackPackAddButton).click()
        cy.get(addToCartButton.sauceLabsFleeJacketAddButton).click()
        cy.get(addToCartButton.sauceLabBikeLightAddButton).click()
        cy.get('button:contains("Remove")').then((removeButton) => {    
            let numOfPurchase;
            cy.get(cartLinkElement.numberOfItemsLink).then((value) => {
                numOfPurchase = value[0].innerText
            expect(removeButton.length).to.be.eq(Number(numOfPurchase));    
            })
    })
};

export function resetAppStateTest(){
    cy.get(dropDownMenuElements.openDropDownMenu).click().then(() => {

        if(cy.get(dropDownMenuElements.resetAppStateLink).click()){
            cy.get(cartLinkElement.numberOfItemsLink).should('not.exist')               
        }          
        
    })
};