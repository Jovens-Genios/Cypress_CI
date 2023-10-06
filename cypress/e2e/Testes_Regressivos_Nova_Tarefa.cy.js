


describe('template spec', () => {

  const po   = require("../fixtures/PageObject.json");
  const mt   = require("../fixtures/MassaTeste.json");
  
  it('CT013 - Ao clicar em “Editar” o usuário deverá ser direcionado à etapa referida e os dados devem estar preenchidos com o que está sendo apresentado no Resumo.', () => {

    cy.visit(mt.Url)

    //Login
    cy.get(po.ID_Usuario).type(mt.Usuario);
    cy.get(po.ID_Senha).type(mt.Senha);
    cy.get(po.ID_Botao).click();
    cy.wait(5000);
    
    //Nova Tarefa
    cy.get(po.ID_Nova_Tarefa).click();
    cy.wait(5000);
    
    //fechar Mensagem
    cy.get(po.ID_Fechar_Mensagem).click();

});
//.........................................................................................................
it('CT012 - Deverão aparecer no campo de busca e no acesso à biblioteca, apenas tópicos com ao menos 5 questões visíveis.', () => {

  cy.visit(mt.Url)

  //Login
  cy.get(po.ID_Usuario).type(mt.Usuario)
  cy.get(po.ID_Senha).type(mt.Senha)
  cy.get(po.ID_Botao).click()

  //Nova Atividade
  cy.get(po.ID_Nova_Atividade).click()

  //Nova Tarefa
  cy.get(po.ID_Nova_Tarefa).click();

  //fechar Mensagem
  cy.get(po.ID_Fechar_Mensagem).click();

});
//------------------------------------------------------------------------------------------------
 it('CT011 - O botão “Próximo” só deve ser habilitado ao ser selecionado ao menos uma disciplina (KnowledgeArea).', () => {

  cy.visit(mt.Url)

  //Login
  cy.get(po.ID_Usuario).type(mt.Usuario)
  cy.get(po.ID_Senha).type(mt.Senha)
  cy.get(po.ID_Botao).click()

  //Nova Atividade
  cy.get(po.ID_Nova_Atividade).click()

  //Nova Tarefa
  cy.get(po.ID_Nova_Tarefa).click();

  //fechar Mensagem
  cy.get(po.ID_Fechar_Mensagem).click();

});
it('CT010 - Poderão ser selecionadas quantas disciplinas forem desejadas, desde que disponíveis.', () => {

  cy.visit(mt.Url)

  //Login
  cy.get(po.ID_Usuario).type(mt.Usuario)
  cy.get(po.ID_Senha).type(mt.Senha)
  cy.get(po.ID_Botao).click()

  //Nova Atividade
  cy.get(po.ID_Nova_Atividade).click()

  //Nova Tarefa
  cy.get(po.ID_Nova_Tarefa).click();

  //fechar Mensagem
  cy.get(po.ID_Fechar_Mensagem).click();

});
//.........................................................................................................
it('CT009 - Deverão aparecer somente as KnwoledgeAreas que estão associadas ao Educador', () => {

  cy.visit(mt.Url)

  //Login
  cy.get(po.ID_Usuario).type(mt.Usuario)
  cy.get(po.ID_Senha).type(mt.Senha)
  cy.get(po.ID_Botao).click()

  //Nova Atividade
  cy.get(po.ID_Nova_Atividade).click()

  //Nova Tarefa
  cy.get(po.ID_Nova_Tarefa).click();

  //fechar Mensagem
  cy.get(po.ID_Fechar_Mensagem).click();

});
//...................................................................................................
    
it('CT008 - Caso a data de Término seja anterior à data de Início, não habilitar o botão “Próximo”.', () => {

  cy.visit(mt.Url)

  //Login
  cy.get(po.ID_Usuario).type(mt.Usuario)
  cy.get(po.ID_Senha).type(mt.Senha)
  cy.get(po.ID_Botao).click()

  //Nova Atividade
  cy.get(po.ID_Nova_Atividade).click()

  //Nova Tarefa
  cy.get(po.ID_Nova_Tarefa).click();

  //fechar Mensagem
  cy.get(po.ID_Fechar_Mensagem).click();
});
  
//------------------------------------------------------------------------------------------------ 
it('CT007 - Caso nenhuma turma seja selecionada, não habilitar o botão “Próximo”.', () => {

  cy.visit(mt.Url)

  //Login
  cy.get(po.ID_Usuario).type(mt.Usuario)
  cy.get(po.ID_Senha).type(mt.Senha)
  cy.get(po.ID_Botao).click()

  //Nova Atividade
  cy.get(po.ID_Nova_Atividade).click()

  //Nova Tarefa
  cy.get(po.ID_Nova_Tarefa).click();

  //fechar Mensagem
  cy.get(po.ID_Fechar_Mensagem).click();
});

//------------------------------------------------------------------------------------------------------------------------
it('CT006 - Caso o campo de Nome da Tarefa esteja com menos de 4 caracteres, não habilitar o botão “Próximo”', () => {

  cy.visit(mt.Url)

  //Login
  cy.get(po.ID_Usuario).type(mt.Usuario)
  cy.get(po.ID_Senha).type(mt.Senha)
  cy.get(po.ID_Botao).click()

  //Nova Atividade
  cy.get(po.ID_Nova_Atividade).click()

  //Nova Tarefa
  cy.get(po.ID_Nova_Tarefa).click();

  //fechar Mensagem
  cy.get(po.ID_Fechar_Mensagem).click();

});

//----------------------------------------------------------------------------------------------------
it('CT005 - Nas datas de início e Término, não deve ser possível selecionar anos anteriores', () => {

  cy.visit(mt.Url)

  //Login
  cy.get(po.ID_Usuario).type(mt.Usuario)
  cy.get(po.ID_Senha).type(mt.Senha)
  cy.get(po.ID_Botao).click()

  //Nova Atividade
  cy.get(po.ID_Nova_Atividade).click()

  //Nova Tarefa
  cy.get(po.ID_Nova_Tarefa).click();

  //fechar Mensagem
  cy.get(po.ID_Fechar_Mensagem).click();
});

//-----------------------------------------------------------------------------------------------------------------------------
it('CT004 - Ao selecionar uma turma, deve ser habilitada “mais opções” representada por 3 pontos.', () => {

  cy.visit(mt.Url)

  //Login
  cy.get(po.ID_Usuario).type(mt.Usuario)
  cy.get(po.ID_Senha).type(mt.Senha)
  cy.get(po.ID_Botao).click()

  //Nova Atividade
  cy.get(po.ID_Nova_Atividade).click()

  //Nova Tarefa
  cy.get(po.ID_Nova_Tarefa).click();

  //fechar Mensagem
  cy.get(po.ID_Fechar_Mensagem).click();
}); 
//.......................................................................................................
  it('CT003 - A seleção de ano escolar permite apenas a seleção de um ano, após a seleção, deverá aparecer somente turmas com a propriedade schoolYear igual ao selecionado', () => {

      cy.visit(mt.Url)
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
      //Nova Atividade
      cy.get(po.ID_Nova_Atividade).click()
  
      //Nova Tarefa
      cy.get(po.ID_Nova_Tarefa).click();
  
      //fechar Mensagem
      cy.get(po.ID_Fechar_Mensagem).click();
  
  });

//---------------------------------------------------------------------------------------------------------------------------------
it('CT002 - O nome da Tarefa deverá conter 4 ou mais caracteres', () => {

      cy.visit(mt.Url)
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
      //Nova Atividade
      cy.get(po.ID_Nova_Atividade).click()
  
      //Nova Tarefa
      cy.get(po.ID_Nova_Tarefa).click();
  
      //fechar Mensagem
      cy.get(po.ID_Fechar_Mensagem).click();

  
      
  });

//.........................................................................................................................
  it('CT001 - Se a escola estiver dentro do período de Olimpíadas, deverá aparecer a mensagem de aviso', () => {

      cy.visit(mt.Url)
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
      //Nova Atividade
      cy.get(po.ID_Nova_Atividade).click()
  
      //Nova Tarefa
      cy.get(po.ID_Nova_Tarefa).click();
  
      //fechar Mensagem
      cy.get(po.ID_Fechar_Mensagem).click();
  
    });

})
