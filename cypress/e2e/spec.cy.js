/// <reference types="cypress" />

describe('template spec', () => {
  it('Cadastrar', () => {
    cy.visit('https://adopet-tau.vercel.app');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="name"]').type('Jose silva');
    cy.get('input[name="email"]').type('email@gmail.com');
    cy.get('input[name="password"]').type('1234Teste');
    cy.get('input[name="confirm_password"]').type('1234Teste');
    cy.contains('button', 'Cadastrar').click();
  })
})