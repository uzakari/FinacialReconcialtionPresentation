// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add(
    'loginByAuth0Api',
    (username, password) => {
      cy.log(`Logging in as ${username}`)
      const client_id = 'Zllc2qXlcjcVW4XtTfY4EAh04u2WRqCh';
      const client_secret = 'IonUpSmjTCyGq8lJmGQ7bgVbiEuI7BTV7AZGjpF2E246Rmn2VZ0FweZ7w_X8WNWE'
      const audience = process.env.REACT_APP_AUTH0_AUDIENCE
      const scope = process.env.REACT_APP_AUTH0_SCOPE
  
      cy.request({
        method: 'POST',
        url: `https://dev-igue0cn6.us.auth0.com/oauth/token`,
        body: {
          grant_type: 'password',
          username,
          password,
          audience,
          scope,
          client_id,
          client_secret,
        },
      }).then(({ body }) => {
        console.log(body);
        localStorage.setItem('islogged', 'true')
      })
    }
  )
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
