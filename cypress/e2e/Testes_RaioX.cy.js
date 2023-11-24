/// <reference types="cypress"/>

// const { contains } = require("cypress/types/jquery");


describe('Raio-X spec', () => {

    const po   = require("../fixtures/PageObject.json");
    const mt   = require("../fixtures/MassaTeste.json");
    require('@cypress/xpath');
  
    it('CT001 - Novo Raio X', () => {
  
      cy.visit(mt.Url)
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
      //Nova Atividade
      cy.get(po.ID_Nova_Atividade).click()
  
      //Novo Raio-x
      cy.get('[data-cy="RAIO X"]').click();
  
      //fechar Mensagem
      cy.get(po.ID_Fechar_Mensagem).click();
  
    });

//..................................................................................................................................................

  it('CT002 - Se o nome não conter 4 caracteres ou mais, não habilitar próximo', () => {

    cy.visit("https://dev-educadores.jovensgenios.com/login")

    //Login
    cy.get(po.ID_Usuario).type(mt.Usuario)
    cy.get(po.ID_Senha).type(mt.Senha)
    cy.get(po.ID_Botao).click()

    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()

   //Novo Raio-x
   cy.get('[data-cy="RAIO X"]').click();
  
   //fechar Mensagem
   cy.get(po.ID_Fechar_Mensagem).click();

   //Nome da Prova
   cy.get('[data-cy="input-activity-name"]').type("Tes");

   //Escolhe Ano
   cy.get(po.Id_Terceiro_ano).click();
  
   //Escolhe Turma
   cy.get('[data-cy="checkbox-schoolClass"]').click();

    //escolhe data
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-cy="input-date"]').click();
    cy.get('.v-picker__actions > .white--text').click();

   //Mensagem
   cy.get('.pt-1 > .failure-pure--text').should('contain', 'utilizar 4 ou mais caracteres');

   //Botão desabilitado
   cy.get(po.ID_Proximo).should('be.disabled');
    
  });

//..................................................................................................................................................

  it('CT003 - Seleção de turma e "mais opções"', () => {

    cy.visit(mt.Url)

    //Login
    cy.get(po.ID_Usuario).type(mt.Usuario)
    cy.get(po.ID_Senha).type(mt.Senha)
    cy.get(po.ID_Botao).click()

    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()

    //Novo Raio-x
    cy.get('[data-cy="RAIO X"]').click();

    //fechar Mensagem
    cy.get(po.ID_Fechar_Mensagem).click();

    //Nome da Prova
    cy.get('[data-cy="input-activity-name"]').type("Raio X QA");
    
    //Escolhe Ano
    cy.get(po.Id_Terceiro_ano).click();

    //Escolhe Turma
    cy.get('[data-cy="checkbox-schoolClass"]').click();

        //Outras opções
        cy.get('.v-btn__content > .v-icon').should("be.visible");

});

//..................................................................................................................................................
    
    it('CT004 - Configuração de data', () => {

      cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
      //Nova Atividade
      cy.get(po.ID_Nova_Atividade).click()
  
     //Novo Raio-xX
        cy.get('[data-cy="RAIO X"]').click();
    
      //fechar Mensagem
      cy.get(po.ID_Fechar_Mensagem).click();
  
      //Nome da Prova
      cy.get('[data-cy="input-activity-name"]').type("Teste QA");
  
      //Escolhe Ano
      cy.get(po.Id_Terceiro_ano).click();
    
      //Escolhe Turma
      cy.get('[data-cy="checkbox-schoolClass"]').click();
  
      //escolhe data
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-cy="input-date"]').click();
      cy.get('.v-picker__actions > .white--text').click();
      
    });

//..................................................................................................................................................

    it.only('CT005 - Só é possível Selecionar uma disciplina', () => {

      cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
      //Nova Atividade
      cy.get(po.ID_Nova_Atividade).click()
  
     //Novo Raio-xX
      cy.get('[data-cy="RAIO X"]').click();
    
      //fechar Mensagem
      cy.get(po.ID_Fechar_Mensagem).click();
  
      //Nome da Prova
      cy.get('[data-cy="input-activity-name"]').type("Teste QA");
  
      //Escolhe Ano
      cy.get(po.Id_Terceiro_ano).click();
    
      //Escolhe Turma
      cy.get('[data-cy="checkbox-schoolClass"]').click();  

      //escolhe data
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-cy="input-date"]').click();
      cy.get('.v-picker__actions > .white--text').click();
    
      //Próximo
      cy.get('[data-cy="btn-next"]').click();

     //Matemática
      cy.get(':nth-child(6) > [data-cy="selectedKnowledgeArea"]').click();

     //Português
     cy.get(':nth-child(5) > [data-cy="selectedKnowledgeArea"]').click();

         //verificar se matematica foi desabilitado
        cy.get(':nth-child(6) > [data-cy="selectedKnowledgeArea"]').should('not.have.class', 'selecionado');

     //proximo
     cy.get('[data-cy="btn-next"]').click();

//..................................................................................................................................................

    });
    it('CT006 - Selecionar ano escolar e período', () => {

      cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()
  
    //Novo Raio-x
    cy.get('[data-cy="RAIO X"]').click();
    
    //fechar Mensagem
    cy.get(po.ID_Fechar_Mensagem).click();
  
    //Nome da Prova
    cy.get('[data-cy="input-activity-name"]').type("Teste QA");
  
    //Escolhe Ano
    cy.get(po.Id_Terceiro_ano).click();
    
    //Escolhe Turma
    cy.get('[data-cy="checkbox-schoolClass"]').click();
      
    //escolhe data
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-cy="input-date"]').click();
    cy.get('.v-picker__actions > .white--text').click();
    //Próximo (Step 2)
    cy.get(po.ID_Proximo).click()

    //Matemática
    cy.get(':nth-child(6) > [data-cy="selectedKnowledgeArea"]').click();

    //Português
    cy.get(':nth-child(5) > [data-cy="selectedKnowledgeArea"]').click();
 
    //proximo (Ano Escolar - Step 3)
    cy.get(po.ID_Proximo).click();
 
    //Selecionar ano escolar
    cy.get(po.Id_3ano_escolar).click();
 
    //Selecionar Período Inicial
    cy.get('[data-cy="btn-INITIAL"]').click();

    });

//..................................................................................................................................................

    it('CT007 - Recado, edição de configurações iniciais', () => {

           cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()
  
    //Novo Raio-xX
    cy.get('[data-cy="RAIO X"]').click();
    
    //fechar Mensagem
    cy.get(po.ID_Fechar_Mensagem).click();
  
    //Nome do Rio-x
    cy.get('[data-cy="input-activity-name"]').type("Teste QA");
  
    //Escolhe Ano
    cy.get(po.Id_Terceiro_ano).click();
    
    //Escolhe Turma
    cy.get('[data-cy="checkbox-schoolClass"]').click();
      
    //escolhe data
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-cy="input-date"]').click();
    cy.get('.v-picker__actions > .white--text').click();

    //Próximo (Step 2)
    cy.get(po.ID_Proximo).click()

    //Matemática
    cy.get(':nth-child(6) > [data-cy="selectedKnowledgeArea"]').click();

    //Português
   cy.get(':nth-child(5) > [data-cy="selectedKnowledgeArea"]').click();

    //proximo (Ano Escolar - Step 3)
    cy.get(po.ID_Proximo).click();

    //Selecionar ano escolar
    cy.get(po.Id_3ano_escolar).click();

    //Selecionar Período Inicial
    cy.get('[data-cy="btn-INITIAL"]').click();

    //Habilidades BNCC
    cy.get('.flex-column.gap-4 > :nth-child(1)').should('contain', 'Habilidades BNCC - 3º ano')

    //Próximo (Recado - Step 4 )
    cy.get(po.ID_Proximo).click();

    //Digitar recado
    cy.get('[data-cy="tiny-message"] > .tox').click().type("Bom Raio-x :)");

    //proximo (Configurações - Step 5)
    cy.get(po.ID_Proximo).click();

    //Editar Tempo de avaliação
    cy.get(':nth-child(2) > [data-cy="btn-edit"]').click();

     //Escolhe Tempo
     cy.get(po.Id_duração_prova).click({multiple: true});
     cy.get(po.Id_45_minutos).click({multiple: true});

     //volta para o step 5
     cy.get('[data-cy="step-5"] > .singleStep').click();

    //Verificar informações
    cy.get(':nth-child(1) > .pa-0.col-12 > .border-card > .row').should('contain', 'Teste E2E Cypress 3° ano').and('contain', '45 minutos')
    });

//.........................................................................................................................................
    it.only('CT008 -  Criação e confirmação', () => {

      cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()
  
    //Novo Raio-xX
    cy.get('[data-cy="RAIO X"]').click();
    
    //fechar Mensagem
    cy.get(po.ID_Fechar_Mensagem).click();
  
    //Nome do Rio-x
    cy.get('[data-cy="input-activity-name"]').type("Teste QA");
  
    //Escolhe Ano
    cy.get(po.Id_Terceiro_ano).click();
    
    //Escolhe Turma
    cy.get('[data-cy="checkbox-schoolClass"]').click();
      
    //escolhe data
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-cy="input-date"]').click();
    cy.get('.v-picker__actions > .white--text').click();

    //Próximo (Step 2)
    cy.get(po.ID_Proximo).click()

    //Matemática
    cy.get(':nth-child(6) > [data-cy="selectedKnowledgeArea"]').click();

    //Português
   cy.get(':nth-child(5) > [data-cy="selectedKnowledgeArea"]').click();

    //proximo (Ano Escolar - Step 3)
    cy.get(po.ID_Proximo).click();

    //Selecionar ano escolar
    cy.get(po.Id_3ano_escolar).click();

    //Selecionar Período Inicial
    cy.get('[data-cy="btn-INITIAL"]').click();

    //Habilidades BNCC
    cy.get('.flex-column.gap-4 > :nth-child(1)').should('contain', 'Habilidades BNCC - 3º ano')

    //Próximo (Recado - Step 4 )
    cy.get(po.ID_Proximo).click();

    //Digitar recado
    cy.get('[data-cy="tiny-message"] > .tox').click().type("Bom Raio-x :)");

    //proximo (Configurações - Step 5)
    cy.get(po.ID_Proximo).click();

    //Editar Tempo de avaliação
    cy.get(':nth-child(2) > [data-cy="btn-edit"]').click();

     //Escolhe Tempo
     cy.get(po.Id_duração_prova).click({multiple: true});
     cy.get(po.Id_45_minutos).click({multiple: true});

     //volta para o step 5
     cy.get('[data-cy="step-5"] > .singleStep').click();

    //Verificar informações
    cy.get(':nth-child(1) > .pa-0.col-12 > .border-card > .row').should('contain', 'Teste E2E Cypress 3° ano').and('contain', '45 minutos')

    //Finalizar
    cy.get(po.ID_Proximo).click();

    //fechar confirmação
    cy.get('.v-card__actions > .mt-4').click();

    //fechar popup
    cy.get('.mt-2 > .row > .d-flex > .v-btn').click();

    //Raio-x em andamento
    cy.get('.rounded > :nth-child(1)').should('contain', 'Raio-X');

    });
})