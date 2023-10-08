
describe('template spec', () => {

  const po   = require("../fixtures/PageObject.json");
  const mt   = require("../fixtures/MassaTeste.json");
  
  it('CT013 - Ao clicar em “Editar” o usuário deverá ser direcionado à etapa referida e os dados devem estar preenchidos com o que está sendo apresentado no Resumo.', () => {

   
cy.visit('https://www.google.com.br/');
cy.get('form > div:nth-child(1)').click();
cy.get('#APjFqb').click();
cy.url().should('contains', 'https://www.google.com.br/search');
cy.url().should('contains', 'https://ogs.google.com.br/u/0/widget/app');
   
});

})

