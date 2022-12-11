import {
    itemPageTest,
    orderItemAndRemove
} from "../../functions/itemDetailTest/itemDetailTest"

describe('Test for the Inventory page', () => {

    beforeEach('url test', () => {
        cy.navigation()
    })

    before('login test', () => {       
        cy.loginTest()
    })

    it('1.item detail test', () => {
        itemPageTest()
    })

    it('2.order and cart notification test', () => {
        orderItemAndRemove()
    })
})