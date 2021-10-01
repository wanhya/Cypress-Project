///<reference types="cypress"/>

import loc from '../support/locators'

describe('facebook', () => {
    

    it('Realizar um cadastro', () => {
        cy.visit('https://pt-br.facebook.com/r.php?locale=pt_BR');
        cy.get(loc.REG.NAME).type('vania');
        cy.get(loc.REG.LAST_NAME).type('cypress');
        cy.get(loc.REG.EMAIL).type('cypressvania@gmail.com');
        cy.get(loc.REG.CONFIR_EMAIL).type('cypressvania@gmail.com');
        cy.get(loc.REG.PASSWORD).type('10000081Va')
        cy.get(loc.REG.DAY).select('15');
        cy.get(loc.REG.MONTH).select('Set');
        cy.get(loc.REG.YEAR).select('1990');
        cy.get(loc.REG.SEX_FEM).click();
        cy.get(loc.REG.BTN).click();

    })

    it.skip('Realizar login', () => {
        cy.visit('https://pt-br.facebook.com/login.php'); 
        cy.get(loc.LOGIN.USER).type('cypressvania@gmail.com');
        cy.get(loc.LOGIN.PASSWORD).type('10000081Va');
        cy.get(loc.LOGIN.BTN_LOGIN).click();
    });

});