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
Cypress.Commands.add('login', (email, password) => {
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="name"]').type('Jose silva');
    cy.get('input[name="email"]').type('email@gmail.com');
    cy.get('input[name="password"]').type('1234Teste');
    cy.get('input[name="confirm_password"]').type('1234Teste');
    cy.contains('button', 'Cadastrar').click();
})
//
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