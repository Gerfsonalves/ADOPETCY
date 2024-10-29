/// <reference types="cypress" />

describe('Adopet', () => {
  beforeEach('Visitar site', () => {
    cy.visit('https://adopet-tau.vercel.app')
  })

  it('Cadastrar', () => {
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="name"]').type('Jose silva');
    cy.get('input[name="email"]').type('email@gmail.com');
    cy.get('input[name="password"]').type('1234Teste');
    cy.get('input[name="confirm_password"]').type('1234Teste');
    cy.contains('button', 'Cadastrar').click();
  })

  it('Fazer login', () => {
    cy.visit('https://adopet-tau.vercel.app/login');
    cy.login('email@gmail.com', '1234Teste');
  });

  it('Campos do formulário de cadastro incorreto', () => {
    cy.contains('a', 'Cadastrar').click();
    cy.contains('button', 'Cadastrar').click();
    cy.contains('É necessário informar seu nome').should('be.visible');
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  })

  it('O e-mail deve ter um formato válido.', () => {
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="name"]').type('Jose silva');
    cy.get('input[name="email"]').type('email.gmail.com');
    cy.get('input[name="password"]').type('1234Teste');
    cy.get('input[name="confirm_password"]').type('1234Teste');
    cy.contains('button', 'Cadastrar').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
  });

  it('pets disponíveis para adoção', () => {
    cy.get('.button').click();
  });

  it('teste os botões header', () => {
    cy.get('.header__home').should('be.visible');
    cy.get('.header__home').click();
    cy.get('.header__message').should('be.visible');
    cy.get('.header__message').click();
  });

  it('Visite a página de /login', () => {
    cy.contains('a', 'Fazer login').click();
  });

  it('Visite a página de /home', () => {
    cy.visit('https://adopet-tau.vercel.app/home');
    cy.contains('Veja os amigos disponíveis para adoção!').should('be.visible');
  });

  it('Na /home  “Falar com o responsável”', () => {
    cy.get('.button').click();
    cy.get('.card__contact').eq(2).click();
  });

})