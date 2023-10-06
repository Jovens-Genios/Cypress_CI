describe('template spec', () => {
  
  //.........................................................................................................................
    it('CT001 - Se a escola estiver dentro do período de Olimpíadas, deverá aparecer a mensagem de aviso', () => {

        cy.visit("https://dev-educadores.jovensgenios.com/login")
    
        //Login
        cy.get("[data-cy=email]").type(mt.Usuario)
        cy.get("[data-cy=password]").type(mt.Senha)
        cy.get(".v-btn__content > .row > .d-flex").click()
    
        //Nova Atividade
        cy.get("[data-cy=home-create] > .row > .iconHolder").click()
    
        //Nova Tarefa
        cy.get("[data-cy=TAREFA] > .rounded-lg").click();
    
        //fechar Mensagem
        cy.get(".pt-9 > :nth-child(2) > .v-btn").click();
    
        cy.get('zzz').should("be.visible");
    });
  
})
