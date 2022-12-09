
const url = "https://www.saucedemo.com"


describe('API test suite', function() {
    let username = 'standard_user';
    let password = 'secret_sauce';
    it('Authenticate', function() {
        cy.loginTest(username, password);
        cy.request("get", url).then((response) => {
            expect(response.status).to.eq(200);
          });
    });
    });