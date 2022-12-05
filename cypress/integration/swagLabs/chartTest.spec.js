import {testTheButtonsInChart, cartTest, compareOrderTest} from "../swagLabsClass/chart.class"

describe('this is the new test', () => {

    beforeEach('url test', () => {
        cy.navigation()
    })

    before('login test', () => {       
        cy.loginTest()
    })

    it('1.Order items', () => {
        testTheButtonsInChart()
    })

    
  it('2.Cart test', () => {
    cartTest()
  })

  it('3.Compare order with cart test', () => {
    compareOrderTest()
  })
    
  
   
})