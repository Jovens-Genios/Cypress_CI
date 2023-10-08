

describe('template spec', () => {

  const po   = require("../fixtures/PageObject.json");
  const mt   = require("../fixtures/MassaTeste.json");
  require('@cypress/xpath');

  it('CT013 - Ao clicar em “Editar” o usuário deverá ser direcionado à etapa referida e os dados devem estar preenchidos com o que está sendo apresentado no Resumo.', () => {

   
    cy.visit(mt.Url)

    //Login
    cy.xpath('/html/body/div[8]/div/div[1]/main/div/div[1]/div/div/div/div[3]/div/div/div[1]/div/input').type("educadortesteqa@jovensgenios.com")
    cy.xpath('/html/body/div[8]/div/div[1]/main/div/div[1]/div/div/div/div[4]/div/div/div[1]/div[1]/input').type("jovensgenios")
    cy.xpath('/html/body/div[8]/div/div[1]/main/div/div[1]/div/div/div/div[7]/button/span/div/div/span').click()
    
    
    //cy.get(po.ID_Senha).type(mt.Senha)
    //cy.get(po.ID_Botao).click()

     //Nova Atividade
    //cy.get(po.ID_Nova_Atividade).click({ force: true })

    //Nova Tarefa
    //cy.get(po.ID_Nova_Tarefa).click({ force: true });

    //fechar Mensagem
    //cy.get(po.ID_Fechar_Mensagem).click({ force: true });
   
});

})
