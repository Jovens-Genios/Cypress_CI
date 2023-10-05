/// <reference types="cypress"/>

import { describe } from "mocha";
const po   = require("../fixtures/PageObject.json");
const mt   = require("../fixtures/MassaTeste.json");



describe('Tarefa Nova',() =>{

    it('CT013 - Ao clicar em “Editar” o usuário deverá ser direcionado à etapa referida e os dados devem estar preenchidos com o que está sendo apresentado no Resumo.', () => {

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

});
//.........................................................................................................
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
    
        
     //Verifica boto próximo
     cy.get('btn-next').should("be.enabled");
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

     //Nome da atividade
     cy.get('[data-cy=input-activity-name]').type("ATIVIDADE");

     //Verifica boto próximo
     cy.get('btn-next').should("be.enabled");
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

    //Nome da atividade
    cy.get('[data-cy=input-activity-name]').type("ATI");

    //Verifica boto próximo
    cy.get('.px-16 > :nth-child(4) > section > .row').should("be.enabled");
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

    //Nome da atividade
    cy.get('[data-cy=input-activity-name]').type("ATIVIDADE 1");

    //Seleciona ano
    cy.get('[data-cy=btn-4] > .v-btn__content > .py-1').click();

    //Selecionar Turma
    cy.get('.row > .align-center').click();

    //Data e hora
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .d-flex > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > [data-cy=input-date]').click();
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

    //Nome da atividade
    cy.get('[data-cy=input-activity-name]').type("ATIVIDADE 1");

    //Seleciona ano
    cy.get('[data-cy=btn-4] > .v-btn__content > .py-1').click();

    //Selecionar Turma
    cy.get('.row > .align-center').click();
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

        //Seleciona Ano
        cy.get('[data-cy=btn-4] > .v-btn__content > .py-1').click();

        //Verifica Turma
        cy.get('.row > .align-center').should("be.visible");
    
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

        //Nome Tarefa
        cy.get('[data-cy=input-activity-name]').type("xyz");
    
        //Verifica mensagem
        cy.get('.pt-1 > .failure-pure--text').should("be.visible");
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
    
        cy.get('zzz').should("be.visible");
    });


    });
