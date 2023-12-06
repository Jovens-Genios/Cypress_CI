/// <reference types="cypress"/>

// const { contains } = require("cypress/types/jquery");


describe('ProvaGenial spec', () => {

    const po   = require("../fixtures/PageObject.json");
    const mt   = require("../fixtures/MassaTeste.json");
    require('@cypress/xpath');
  
    it('CT001 - Nova Prova Genial', () => {
  
      cy.visit(mt.Url)
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
      //Nova Atividade
      cy.get(po.ID_Nova_Atividade).click()
  
      //Nova Prova
      cy.get('[data-cy="PROVA GENIAL"]').click();
  
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

   //Nova Prova
   cy.get('[data-cy="PROVA GENIAL"]').click();
  
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

  it('CT003 - Seleção de turma', () => {

    cy.visit(mt.Url)

    //Login
    cy.get(po.ID_Usuario).type(mt.Usuario)
    cy.get(po.ID_Senha).type(mt.Senha)
    cy.get(po.ID_Botao).click()

    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()

    //Nova Prova
    cy.get('[data-cy="PROVA GENIAL"]').click();

    //fechar Mensagem
    cy.get(po.ID_Fechar_Mensagem).click();

    //Nome da Prova
    cy.get('[data-cy="input-activity-name"]').type("Prova Genial QA");
    
    //Escolhe Ano
    cy.get(po.Id_Terceiro_ano).click();

    //Escolhe Turma
    cy.get('[data-cy="checkbox-schoolClass"]').click();

});

//..................................................................................................................................................

it('CT004 - "Mais opções" deve ser habilitado ', () => {

    cy.visit(mt.Url)

    //Login
    cy.get(po.ID_Usuario).type(mt.Usuario)
    cy.get(po.ID_Senha).type(mt.Senha)
    cy.get(po.ID_Botao).click()

    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()

    //Nova Prova
      cy.get('[data-cy="PROVA GENIAL"]').click();

    //fechar Mensagem
    cy.get(po.ID_Fechar_Mensagem).click();

    //Nome da Prova
    cy.get('[data-cy="input-activity-name"]').type("Prova Genial QA");
    
    //Escolhe Ano
    cy.get(po.Id_Terceiro_ano).click();

    //Escolhe Turma
    cy.get('[data-cy="checkbox-schoolClass"]').click();

     //Outras opções
     cy.get('.v-btn__content > .v-icon').should("be.visible");
    });

//..................................................................................................................................................
    
    it('CT005 - Configuração de data', () => {

      cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
      //Nova Atividade
      cy.get(po.ID_Nova_Atividade).click()
  
     //Nova Prova
        cy.get('[data-cy="PROVA GENIAL"]').click();
    
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

    it('CT006 - Selecionar disciplina', () => {

      cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
      //Nova Atividade
      cy.get(po.ID_Nova_Atividade).click()
  
     //Nova Prova
      cy.get('[data-cy="PROVA GENIAL"]').click();
    
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

       //Geografia
       cy.get(':nth-child(3) > [data-cy="selectedKnowledgeArea"]').click();

       //Inglês
       cy.get(':nth-child(1) > [data-cy="selectedKnowledgeArea"]').click();

       //proximo
       cy.get('[data-cy="btn-next"]').click();

//..................................................................................................................................................

    });
    it.only('CT008 - Selecionar questões e verificar carrinho', () => {

      cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()
  
    //Nova Prova
    cy.get('[data-cy="PROVA GENIAL"]').click();
    
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

    //Geografia
    cy.get(':nth-child(3) > [data-cy="selectedKnowledgeArea"]').click();

    //Inglês
    cy.get(':nth-child(1) > [data-cy="selectedKnowledgeArea"]').click();

    //proximo (Step 3)
    cy.get(po.ID_Proximo).click();

    //Selecionar questão recomendada
    cy.get(':nth-child(1) > .justify-space-between > .justify-end > .primary-500').click();

    //Animação do carrinho
    cy.get('.cartWrapper').should("be.visible");

    //fechar o carrinho
    cy.get('.setIcon').click();

    //selecionar questão recomendada
    cy.get(':nth-child(2) > .justify-space-between > .justify-end > .primary-500').click();

    //escolher outra disciplina
    cy.get('[data-cy="tab-Inglês"]').click();

    //Selecionar questão sugerida
    cy.get('.v-window-item--active > .px-16 > .flex-grow-1 > :nth-child(3) > section > .mt-2 > .pa-0 > :nth-child(1) > .justify-space-between > .justify-end > .primary-500').click({force: true });

    //proximo (Editar questões - Spet 4)
    cy.get('.v-window-item--active > .px-16 > .flex-grow-1 > :nth-child(4) > .row > [data-cy="btn-next"]').click();

    });

//..................................................................................................................................................

    it('CT009 -  Exclusivos JG, Recados ', () => {

      cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()
  
    //Nova Prova
    cy.get('[data-cy="PROVA GENIAL"]').click();
    
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

    //Geografia
    cy.get(':nth-child(3) > [data-cy="selectedKnowledgeArea"]').click();

    //Inglês
    cy.get(':nth-child(1) > [data-cy="selectedKnowledgeArea"]').click();

    //proximo (Step 3)
    cy.get(po.ID_Proximo).click();

    //Selecionar questão sugerida
    cy.get(':nth-child(1) > .justify-space-between > .justify-end > .primary-500').click();

    //Animação do carrinho
    cy.get('.cartWrapper').should("be.visible");

    //fechar o carrinho
    cy.get('.setIcon').click();

    //selecionar questão recomendada
    cy.get(':nth-child(2) > .justify-space-between > .justify-end > .primary-500').click();

    //escolher outra disciplina
    cy.get('[data-cy="tab-Inglês"]').click();

    //Selecionar questão sugerida
    cy.get('.v-window-item--active > .px-16 > .flex-grow-1 > :nth-child(3) > section > .mt-2 > .pa-0 > :nth-child(1) > .justify-space-between > .justify-end > .primary-500').click({force: true });

    //proximo (Editar questões - Spet 4)
    cy.get('.v-window-item--active > .px-16 > .flex-grow-1 > :nth-child(4) > .row > [data-cy="btn-next"]').click();

    //Proximo (Exclusivo - Spet 5)
    cy.get(po.ID_Proximo).click();

    //bloqueio anti-cola
    cy.get(po.Id_Anti_Cola).click();

    //uso de poderes
    cy.get(po.Id_poderes).click();

    //proximo (Recados - Step 6)
    cy.get(po.ID_Proximo).click();

    //Digitar recado
    cy.get('[data-cy="tiny-message"] > .tox').click().type("Boa prova :)");

    //proximo (Configurações - Step 7)
    cy.get(po.ID_Proximo).click();

    //Editar Prova
    cy.get(':nth-child(6) > .border-card > .flex-column > .row > [data-cy="btn-edit"]').click();

    //Editar Pontuação 
    for (let i = 0; i < 2; i++) {
    cy.get(po.Id_Aumenta_Pontuação).click();
    }

    // Voltar para o step 7
    cy.get('[data-cy="step-7"] > .singleStep').click();

    //Checagem configuração inicial
    cy.get(':nth-child(1) > .pa-0.col-12 > .border-card').should('contain', 'Teste E2E Cypress 3° ano');

    //checagem Pontuação
    cy.get('.flex-column > :nth-child(4) > .ma-0').should('contain', '4.0');

    //proximo 
    cy.get(po.ID_Proximo).click();

    //fechar confirmação
    cy.get('.v-card__actions > .mt-4').click();

    //fechar popup
    cy.get('.mt-2 > .row > .d-flex > .v-btn').click();

    //prova em andamento
    cy.get('.rounded > :nth-child(1)').should('contain', 'Prova Genial');
    });

//..................................................................................................................................................

    it('CT0010 -  Configurações, Edição de pontuação, checagem de informações', () => {

      cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()
  
    //Nova Prova
    cy.get('[data-cy="PROVA GENIAL"]').click();
    
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

    //Geografia
    cy.get(':nth-child(3) > [data-cy="selectedKnowledgeArea"]').click();

    //Inglês
    cy.get(':nth-child(1) > [data-cy="selectedKnowledgeArea"]').click();

    //proximo (Step 3)
    cy.get(po.ID_Proximo).click();

    //Selecionar questão sugerida
    cy.get(':nth-child(1) > .justify-space-between > .justify-end > .primary-500').click();

    //Animação do carrinho
    cy.get('.cartWrapper').should("be.visible");

    //fechar o carrinho
    cy.get('.setIcon').click();

    //selecionar questão recomendada
    cy.get(':nth-child(2) > .justify-space-between > .justify-end > .primary-500').click();

    //escolher outra disciplina
    cy.get('[data-cy="tab-Inglês"]').click();

    //Selecionar questão sugerida
    cy.get('.v-window-item--active > .px-16 > .flex-grow-1 > :nth-child(3) > section > .mt-2 > .pa-0 > :nth-child(1) > .justify-space-between > .justify-end > .primary-500').click({force: true });

    //proximo (Editar questões - Spet 4)
    cy.get('.v-window-item--active > .px-16 > .flex-grow-1 > :nth-child(4) > .row > [data-cy="btn-next"]').click();

    //Proximo (Exclusivo - Spet 5)
    cy.get(po.ID_Proximo).click();

    //bloqueio anti-cola
    cy.get(po.Id_Anti_Cola).click();

    //uso de poderes
    cy.get(po.Id_poderes).click();

    //proximo (Recados - Step 6)
    cy.get(po.ID_Proximo).click();

    //Digitar recado
    cy.get('[data-cy="tiny-message"] > .tox').click().type("Boa prova :)");

    //proximo (Configurações - Step 7)
    cy.get(po.ID_Proximo).click();

    //Editar Prova
    cy.get(':nth-child(6) > .border-card > .flex-column > .row > [data-cy="btn-edit"]').click();

    //Editar Pontuação 
    for (let i = 0; i < 2; i++) {
    cy.get(po.Id_Aumenta_Pontuação).click();
    }

    // Voltar para o step 7
    cy.get('[data-cy="step-7"] > .singleStep').click();

    //Checagem configuração inicial
    cy.get(':nth-child(1) > .pa-0.col-12 > .border-card').should('contain', 'Teste E2E Cypress 3° ano');

    //checagem Pontuação
    cy.get('.flex-column > :nth-child(4) > .ma-0').should('contain', '4.0');
    });

//.........................................................................................................................................
    it('CT010 -  Criação e confirmação', () => {

      cy.visit("https://dev-educadores.jovensgenios.com/login")
  
      //Login
      cy.get(po.ID_Usuario).type(mt.Usuario)
      cy.get(po.ID_Senha).type(mt.Senha)
      cy.get(po.ID_Botao).click()
  
    //Nova Atividade
    cy.get(po.ID_Nova_Atividade).click()
  
    //Nova Prova
    cy.get('[data-cy="PROVA GENIAL"]').click();
    
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

    //Geografia
    cy.get(':nth-child(3) > [data-cy="selectedKnowledgeArea"]').click();

    //Inglês
    cy.get(':nth-child(1) > [data-cy="selectedKnowledgeArea"]').click();

    //proximo (Step 3)
    cy.get(po.ID_Proximo).click();

    //Selecionar questão sugerida
    cy.get(':nth-child(1) > .justify-space-between > .justify-end > .primary-500').click();

    //Animação do carrinho
    cy.get('.cartWrapper').should("be.visible");

    //fechar o carrinho
    cy.get('.setIcon').click();

    //selecionar questão recomendada
    cy.get(':nth-child(2) > .justify-space-between > .justify-end > .primary-500').click();

    //escolher outra disciplina
    cy.get('[data-cy="tab-Inglês"]').click();

    //Selecionar questão sugerida
    cy.get('.v-window-item--active > .px-16 > .flex-grow-1 > :nth-child(3) > section > .mt-2 > .pa-0 > :nth-child(1) > .justify-space-between > .justify-end > .primary-500').click({force: true });

    //proximo (Editar questões - Spet 4)
    cy.get('.v-window-item--active > .px-16 > .flex-grow-1 > :nth-child(4) > .row > [data-cy="btn-next"]').click();

    //Proximo (Exclusivo - Spet 5)
    cy.get(po.ID_Proximo).click();

    //bloqueio anti-cola
    cy.get(po.Id_Anti_Cola).click();

    //uso de poderes
    cy.get(po.Id_poderes).click();

    //proximo (Recados - Step 6)
    cy.get(po.ID_Proximo).click();

    //Digitar recado
    cy.get('[data-cy="tiny-message"] > .tox').click().type("Boa prova :)");

    //proximo (Configurações - Step 7)
    cy.get(po.ID_Proximo).click();

    //Editar Prova
    cy.get(':nth-child(6) > .border-card > .flex-column > .row > [data-cy="btn-edit"]').click();

    //Editar Pontuação 
    for (let i = 0; i < 2; i++) {
    cy.get(po.Id_Aumenta_Pontuação).click();
    }

    // Voltar para o step 7
    cy.get('[data-cy="step-7"] > .singleStep').click();

    //Checagem configuração inicial
    cy.get(':nth-child(1) > .pa-0.col-12 > .border-card').should('contain', 'Teste E2E Cypress 3° ano');

    //checagem Pontuação
    cy.get('.flex-column > :nth-child(4) > .ma-0').should('contain', '4.0');

    //proximo 
    cy.get(po.ID_Proximo).click();

    //fechar confirmação
    cy.get('.v-card__actions > .mt-4').click();

    //fechar popup
    cy.get('.mt-2 > .row > .d-flex > .v-btn').click();

    //prova em andamento
    cy.get('.rounded > :nth-child(1)').should('contain', 'Prova Genial');

    });
})
