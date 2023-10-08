
describe('template spec', () => {

  const po   = require("../fixtures/PageObject.json");
  const mt   = require("../fixtures/MassaTeste.json");
  
  it('CT013 - Ao clicar em “Editar” o usuário deverá ser direcionado à etapa referida e os dados devem estar preenchidos com o que está sendo apresentado no Resumo.', () => {

    
    cy.visit("http://www.google.com")
    cy.get('#APjFqb').type("oooo");
    
   
});

})

