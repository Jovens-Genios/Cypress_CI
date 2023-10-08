cy.visit('https://www.google.com.br/');
cy.get('form > div:nth-child(1)').click();
cy.get('#APjFqb').click();
cy.url().should('contains', 'https://www.google.com.br/search');
cy.url().should('contains', 'https://ogs.google.com.br/u/0/widget/app');
