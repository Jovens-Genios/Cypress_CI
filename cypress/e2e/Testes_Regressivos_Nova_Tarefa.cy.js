
describe('template spec', () => {

  const po   = require("../fixtures/PageObject.json");
  const mt   = require("../fixtures/MassaTeste.json");
  
  it('CT013 - Ao clicar em “Editar” o usuário deverá ser direcionado à etapa referida e os dados devem estar preenchidos com o que está sendo apresentado no Resumo.', () => {

   
    cy.visit(mt.Url)

    //Login
    cy.get(po.ID_Usuario).type(mt.Usuario)
    cy.get(po.ID_Senha).type(mt.Senha)
    cy.get(po.ID_Botao).click()

    
   
});

})

