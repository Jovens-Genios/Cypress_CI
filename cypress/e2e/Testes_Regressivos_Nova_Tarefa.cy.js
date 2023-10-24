/// <reference types="cypress"/>


describe('template spec', () => {

  const po   = require("../fixtures/PageObject.json");
  const mt   = require("../fixtures/MassaTeste.json");
  require('@cypress/xpath');

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
//.......................................................................................................

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

    //Nome da Tarefa
    cy.get('[data-cy="input-activity-name"]').type("Tes");

    //Mensagem
    cy.get('.pt-1 > .failure-pure--text').invoke('text').then(($value) => {
    cy.log($value)
    
  })

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

    //Nome da Tarefa
    cy.get('[data-cy="input-activity-name"]').type("Teste QA");
    
    //Escolhe Ano
    cy.get(':nth-child(6) > .v-btn__content > .py-1').click();

    //Escolhe Turma
    cy.get(':nth-child(1) > .row > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > [data-cy="checkbox-schoolClass"]').click();

});
//................................................................................................................
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

      //Nome da Tarefa
      cy.get('[data-cy="input-activity-name"]').type("Teste QA");
    
      //Escolhe Ano
      cy.get(':nth-child(6) > .v-btn__content > .py-1').click();
  
      //Escolhe Turma
      cy.get(':nth-child(1) > .row > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > [data-cy="checkbox-schoolClass"]').click();

      //Outras opções
      cy.get('.v-btn__content > .v-icon').should("be.visible");

    });

//................................................................................................................
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

      //Nome da Tarefa
      cy.get('[data-cy="input-activity-name"]').type("Teste QA");
    
      //Escolhe Ano
      cy.get(':nth-child(6) > .v-btn__content > .py-1').click();
  
      //Escolhe Turma
      cy.get(':nth-child(1) > .row > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > [data-cy="checkbox-schoolClass"]').click();

      //Data Inicio
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-cy="input-date"]').click();


    });
//.........................................................................................

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

     //Nome da Tarefa
     cy.get('[data-cy="input-activity-name"]').type("Tes");
   
     
  
});
//.........................................................................................

 
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

  //Nome da Tarefa
  cy.get('[data-cy="input-activity-name"]').type("Teste QA");

  //Escolhe Ano
  cy.get(':nth-child(6) > .v-btn__content > .py-1').click();


});
//.........................................................................................


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

  //Nome da Tarefa
  cy.get('[data-cy="input-activity-name"]').type("Teste QA");

  //Escolhe Ano
  cy.get(':nth-child(6) > .v-btn__content > .py-1').click();

});

//...................................................................................................
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
    
      //Nome da Tarefa
      cy.get('[data-cy="input-activity-name"]').type("Teste QA");
    
      //Escolhe Ano
      cy.get(':nth-child(6) > .v-btn__content > .py-1').click();

});
//.........................................................................................................
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
    
      //Nome da Tarefa
      cy.get('[data-cy="input-activity-name"]').type("Teste QA");
    
      //Escolhe Ano
      cy.get(':nth-child(6) > .v-btn__content > .py-1').click();

      //Escolhe Turma
      cy.get(':nth-child(2) > .row > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > [data-cy="checkbox-schoolClass"]').click();

      //Proximo
      cy.get('[data-cy="btn-next"] > .v-btn__content').click();

      //Matematica
      cy.get(':nth-child(1) > [data-cy="selectedKnowledgeArea"]').click();

      //Portugues
      cy.get(':nth-child(2) > [data-cy="selectedKnowledgeArea"]').click();

      //Geografia
      cy.get(':nth-child(3) > [data-cy="selectedKnowledgeArea"]').click();

    });
//.........................................................................................................

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
    
      //Nome da Tarefa
      cy.get('[data-cy="input-activity-name"]').type("Teste QA");
    
      //Escolhe Ano
      cy.get(':nth-child(6) > .v-btn__content > .py-1').click();

      //Escolhe Turma
      cy.get(':nth-child(2) > .row > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > [data-cy="checkbox-schoolClass"]').click();

      //Proximo
      cy.get('[data-cy="btn-next"] > .v-btn__content').click();

});
//.........................................................................................................

it('CT013 - Deverão aparecer no campo de busca e no acesso à biblioteca, apenas tópicos com ao menos 5 questões visíveis.', () => {


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
    
      //Nome da Tarefa
      cy.get('[data-cy="input-activity-name"]').type("Teste QA");
    
      //Escolhe Ano
      cy.get(':nth-child(6) > .v-btn__content > .py-1').click();

      //Escolhe Turma
      cy.get(':nth-child(2) > .row > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > [data-cy="checkbox-schoolClass"]').click();

      //Proximo
      cy.get('[data-cy="btn-next"] > .v-btn__content').click();

      //Matematica
      cy.get(':nth-child(1) > [data-cy="selectedKnowledgeArea"]').click();

      //Portugues
      cy.get(':nth-child(2) > [data-cy="selectedKnowledgeArea"]').click();

      //Geografia
      cy.get(':nth-child(3) > [data-cy="selectedKnowledgeArea"]').click();

      //Proximo
      cy.get('[data-cy="btn-next"] > .v-btn__content').click();

      //Matematica
      cy.get('[data-cy="input-text"]').type("soma");

      //Portugues
      cy.get('.v-slide-group__content > :nth-child(3)').click();

      //Geografia
      cy.get('.v-slide-group__content > :nth-child(4)').click();
});
//.........................................................................................................

it('CT014 - Ao clicar em “Editar” o usuário deverá ser direcionado à etapa referida e os dados devem estar preenchidos com o que está sendo apresentado no Resumo.', () => {

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
//----------------------------------------------------------------------------------------------








    })
  

