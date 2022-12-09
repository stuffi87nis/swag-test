import {
    dropDownMenuTest,
    sortingItemsTest,
    numberOfItemsTest,
    numberOfNotificationTest,
    resetAppStateTest,
    sortingTest
} from "../../functions/inventoryFunction/inventory.functions"

describe('Test for the Inventory page', () => {

    beforeEach('url test', () => {
        cy.navigation()
    })

    before('login test', () => {       
        cy.loginTest()
    })

    it('1.dropDown menu test', () => {
        dropDownMenuTest()
    })

    it('2.Sorting items test', () => {
        sortingItemsTest()
    })

    it('3.Number of items', () => {
        numberOfItemsTest()
    })


    it('4.Number of notifitacions', () => {
        numberOfNotificationTest()
    })

    it('5.reset app state test', () => {
        resetAppStateTest()
    })

    it.only('6.sort items test', () => {
        sortingTest()
    })
})