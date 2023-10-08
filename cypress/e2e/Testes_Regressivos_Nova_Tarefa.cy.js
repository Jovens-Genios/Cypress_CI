


describe('template spec', () => {

  const po   = require("../fixtures/PageObject.json");
  const mt   = require("../fixtures/MassaTeste.json");
  
  it('CT013 - Ao clicar em “Editar” o usuário deverá ser direcionado à etapa referida e os dados devem estar preenchidos com o que está sendo apresentado no Resumo.', () => {

cy.visit('https://dev-educadores.jovensgenios.com/atividades/tarefa/criar?step=1');
cy.get('[data-cy=input-activity-name]').click();
cy.get('[data-cy=input-activity-name]').type('xxxx');
cy.get('.v-btn__content > .white--text').click();
cy.get('[data-cy=school]').click();


});

  
})
