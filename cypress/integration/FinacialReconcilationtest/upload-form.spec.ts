/// <reference types="cypress" />
/// <reference types="cypress-file-upload" />


describe('Auth0', function () {
  beforeEach(function () {
    cy.loginByAuth0Api(
      'uzakaritest@gmail.com',
      'Tutukaumar2'
    )
  });

  
describe('Upload Form ', () => {
  it('Pick a file from a path and upload', () => {
    cy.visit('http://localhost:4200/file');
    const firstFile = 'clientmarkofffile20140113.csv';
    cy.get('.firstFile').attachFile(firstFile);

    const secondFile = `markofffile20140113.csv`;

    cy.get('.secondFile').attachFile(secondFile);

    cy.get('#compareBtn').should('not.be.disabled');

    // check to see if the service is ready to accept http requests
    cy.request('https://localhost:44327/health/live').then((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      });

    cy.get('#compareBtn').click();

    cy.get('#unmatchBtn')
      .click()
      .and('not.have.class', 'inactive');
  });
});

})

