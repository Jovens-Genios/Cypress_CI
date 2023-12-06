/// <reference types="cypress"/>


describe('Aula Invertida spec', () => {

    const po = require("../fixtures/PageObject.json");
    const mt = require("../fixtures/MassaTeste.json");
    require('@cypress/xpath');

    it('CT001 - Nova Aula Invertida', () => {

        cy.visit(mt.Url);

        //Login
        cy.get(po.ID_Usuario).type(mt.Usuario);
        cy.get(po.ID_Senha).type(mt.Senha);
        cy.get(po.ID_Botao).click();

        //Nova Atividade
        cy.get(po.ID_Nova_Atividade).click();

        //Nova Aula Invertida
        cy.get('[data-cy="AULA INVERTIDA"]').click();

        //fechar Mensagem
        cy.get(po.ID_Fechar_Mensagem).click();

    });
    //....................................................................................................................
    it('CT002 - Se o nome não conter 4 caracteres ou mais, não habilitar próximo', () => {

        cy.visit("https://dev-educadores.jovensgenios.com/login");

        //Login
        cy.get(po.ID_Usuario).type(mt.Usuario);
        cy.get(po.ID_Senha).type(mt.Senha);
        cy.get(po.ID_Botao).click();

        //Nova Atividade
        cy.get(po.ID_Nova_Atividade).click();

        //Nova Aula Invertida
        cy.get('[data-cy="AULA INVERTIDA"]').click();

        //fechar Mensagem
        cy.get(po.ID_Fechar_Mensagem).click();

        //Nome da Atividade
        cy.get(po.id_nome_atividade).type("Tes");

        //Escolhe Ano
        cy.get(po.Id_Terceiro_ano).click();

        //Escolhe Turma
        cy.get(po.id_seleciona_turma).click();

        //escolhe data
        cy.get(po.id_escolhe_data).click();
        cy.get(po.id_confirma_data).click();

        //Mensagem
        cy.get(po.id_mensagem_erro).should('contain', 'utilizar 4 ou mais caracteres');

        //Botão desabilitado
        cy.get(po.ID_Proximo).should('be.disabled');

    });

    //....................................................................................................................
    it('CT003 - Configuração de data', () => {

        cy.visit("https://dev-educadores.jovensgenios.com/login");

        //Login
        cy.get(po.ID_Usuario).type(mt.Usuario);
        cy.get(po.ID_Senha).type(mt.Senha);
        cy.get(po.ID_Botao).click();

        //Nova Atividade
        cy.get(po.ID_Nova_Atividade).click();

        //Nova Aula Invertida
        cy.get('[data-cy="AULA INVERTIDA"]').click();

        //fechar Mensagem
        cy.get(po.ID_Fechar_Mensagem).click();

        //Nome da Prova
        cy.get(po.id_nome_atividade).type("Teste QA");

        //Escolhe Ano
        cy.get(po.Id_Terceiro_ano).click();

        //Escolhe Turma
        cy.get(po.id_seleciona_turma).click();

        //escolhe data
        cy.get(po.id_escolhe_data).click();
        cy.get(po.id_confirma_data).click();

    });

    //....................................................................................................................
    it('CT004 - Deve ser possível selecionar mais de uma disciplina', () => {

        cy.visit("https://dev-educadores.jovensgenios.com/login");

        //Login
        cy.get(po.ID_Usuario).type(mt.Usuario);
        cy.get(po.ID_Senha).type(mt.Senha);
        cy.get(po.ID_Botao).click();

        //Nova Atividade
        cy.get(po.ID_Nova_Atividade).click();

        //Nova Aula Invertida
        cy.get('[data-cy="AULA INVERTIDA"]').click();

        //fechar Mensagem
        cy.get(po.ID_Fechar_Mensagem).click();

        //Nome da Aula invertida
        cy.get(po.id_nome_atividade).type("Teste QA");

        //Escolhe Ano
        cy.get(po.Id_Terceiro_ano).click();

        //Escolhe Turma
        cy.get(po.id_seleciona_turma).click();

        //escolhe data
        cy.get(po.id_escolhe_data).click();
        cy.get(po.id_confirma_data).click();

        cy.get(po.ID_Proximo).click();

        //escolhe disciplinas
        cy.get(po.id_materia_ciencias).click();
        cy.get(po.id_materia_historia).click();

        cy.get(po.ID_Proximo).click();

    });

    //....................................................................................................................
    it('CT005 - Numero de topicos não pode ser maior que quantidade de alunos', () => {

        cy.visit("https://dev-educadores.jovensgenios.com/login");

        //Login
        cy.get(po.ID_Usuario).type(mt.Usuario);
        cy.get(po.ID_Senha).type(mt.Senha);
        cy.get(po.ID_Botao).click();

        //Nova Atividade
        cy.get(po.ID_Nova_Atividade).click();

        //Nova Aula Invertida
        cy.get('[data-cy="AULA INVERTIDA"]').click();

        //fechar Mensagem
        cy.get(po.ID_Fechar_Mensagem).click();

        //Nome da Aula invertida
        cy.get(po.id_nome_atividade).type("Teste QA");

        //Escolhe Ano
        cy.get(po.Id_Terceiro_ano).click();

        //Escolhe Turma
        cy.get(po.id_seleciona_turma).click();

        //escolhe data
        cy.get(po.id_escolhe_data).click();
        cy.get(po.id_confirma_data).click();

        cy.get(po.ID_Proximo).click();

        //escolhe disciplinas
        cy.get(po.id_materia_ciencias).click();

        cy.get(po.ID_Proximo).click();

        //Acessar biblioteca Ciencias
        cy.get(po.id_biblioteca).click();

        //escolher ano
        cy.get(po.id_3ano_disciplina).click();
        cy.get(po.ID_Proximo).click();

        //escolhe unidade tematica
        cy.get(po.id_materia_energia).click();

        //escohe primeiro tópico
        cy.get(po.id_efeito_dasluzes).click();

        //Animação do carrinho
        cy.get(po.id_carriho).should("be.visible");

        //fechar o carrinho
        cy.get('.setIcon').click();

        //escolhe segundo tópico
        cy.get(po.id_produção_dosom).click();

        //escolher terceiro tópico
        cy.get(po.id_saude_visual).click();

        //mensagem de aviso
        cy.get('.v-snack__content').should('contain', 'A quantidade de tópicos não pode ultrapassar a quantidade de alunos');
       
    });

    //....................................................................................................................

    it('CT006 - Configuracao grupos e disciplinas', () => {

        cy.visit("https://dev-educadores.jovensgenios.com/login");

        //Login
        cy.get(po.ID_Usuario).type(mt.Usuario);
        cy.get(po.ID_Senha).type(mt.Senha);
        cy.get(po.ID_Botao).click();

        //Nova Atividade
        cy.get(po.ID_Nova_Atividade).click();

        //Nova Aula Invertida
        cy.get('[data-cy="AULA INVERTIDA"]').click();

        //fechar Mensagem
        cy.get(po.ID_Fechar_Mensagem).click();

        //Nome da Aula invertida
        cy.get(po.id_nome_atividade).type("Teste QA");

        //Escolhe Ano
        cy.get(po.Id_Terceiro_ano).click();

        //Escolhe Turma
        cy.get(po.id_seleciona_turma).click();

        //escolhe data
        cy.get(po.id_escolhe_data).click();
        cy.get(po.id_confirma_data).click();

        cy.get(po.ID_Proximo).click();

        //escolhe disciplinas
        cy.get(po.id_materia_ciencias).click();

        cy.get(po.ID_Proximo).click();

        //Acessar biblioteca Ciencias
        cy.get(po.id_biblioteca).click();

        //escolher ano
        cy.get(po.id_3ano_disciplina).click();
        cy.get(po.ID_Proximo).click();

        //escolhe unidade tematica
        cy.get(po.id_materia_energia).click();

        //escohe primeiro tópico
        cy.get(po.id_efeito_dasluzes).click();

        //Animação do carrinho
        cy.get(po.id_carriho).should("be.visible");

        //fechar o carrinho
        cy.get('.setIcon').click();

        //escolhe segundo tópico
        cy.get(po.id_produção_dosom).click();

        cy.get(po.ID_Proximo).click();

        //forma grupos
        cy.get(po.id_botao_aleatorio).click();
    
        cy.get(po.ID_Proximo).click();

        //organiza tópicos
        cy.get(po.id_botao_aleatorio).click();

        cy.get(po.ID_Proximo).click();

    });

//....................................................................................................................

    it.only('CT007 - recado, criação e confirmação', () => {

        cy.visit("https://dev-educadores.jovensgenios.com/login");

        //Login
        cy.get(po.ID_Usuario).type(mt.Usuario);
        cy.get(po.ID_Senha).type(mt.Senha);
        cy.get(po.ID_Botao).click();

        //Nova Atividade
        cy.get(po.ID_Nova_Atividade).click();

        //Nova Aula Invertida
        cy.get('[data-cy="AULA INVERTIDA"]').click();

        //fechar Mensagem
        cy.get(po.ID_Fechar_Mensagem).click();

        //Nome da Aula invertida
        cy.get(po.id_nome_atividade).type("Teste QA");

        //Escolhe Ano
        cy.get(po.Id_Terceiro_ano).click();

        //Escolhe Turma
        cy.get(po.id_seleciona_turma).click();

        //escolhe data
        cy.get(po.id_escolhe_data).click();
        cy.get(po.id_confirma_data).click();

        //proximo
        cy.get(po.ID_Proximo).click();

        //escolhe disciplinas
        cy.get(po.id_materia_ciencias).click();

        //proximo
        cy.get(po.ID_Proximo).click();

        //Acessar biblioteca Ciencias
        cy.get(po.id_biblioteca).click();

        //escolher ano
        cy.get(po.id_3ano_disciplina).click();
        cy.get(po.ID_Proximo).click();

        //escolhe unidade tematica
        cy.get(po.id_materia_energia).click();

        //escohe primeiro tópico
        cy.get(po.id_efeito_dasluzes).click();

        //Animação do carrinho
        cy.get(po.id_carriho).should("be.visible");

        //fechar o carrinho
        cy.get('.setIcon').click();

        //escolhe segundo tópico
        cy.get(po.id_produção_dosom).click();

        cy.get(po.ID_Proximo).click();

        //forma grupos
        cy.get(po.id_botao_aleatorio).click();

        cy.get(po.ID_Proximo).click();

        //organiza tópicos
        cy.get(po.id_botao_aleatorio).click();

        cy.get(po.ID_Proximo).click();

        //Digitar recado
        cy.get('[data-cy="tiny-message"] > .tox').click().type("Boa atividade!");

        //proximo 
        cy.get(po.ID_Proximo).click();

        //Checagem configuração inicial
        cy.get(po.id_configuracao_inicial).should('contain', 'Teste E2E Cypress 3° ano');

        //proximo 
        cy.get(po.ID_Proximo).click();

        //fechar confirmação
        cy.get('.v-card__actions > .mt-4').click();

        //fechar popup
        cy.get('.mt-2 > .row > .d-flex > .v-btn').click();

        //prova em andamento
        cy.get('.rounded > :nth-child(1)').should('contain', 'Aula Invertida');

    });


});