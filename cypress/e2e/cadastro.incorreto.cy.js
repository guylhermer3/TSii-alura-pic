describe('Pagina de cadastro, cenário de cadastro incorreto', () => {
    beforeEach(()=>{
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Deve verificar as mensagem de dados obrigatórios no cadastro', () => {
      
      cy.getByData('register').click()
      cy.getByData('btnRegister').click()
      cy.contains('Email is required!').should('be.visible')
      cy.getByData('btnRegister').click()
      cy.contains('Full name is required!').should('be.visible')
      cy.contains('User name is required!').should('be.visible')
      cy.contains('Password is required!').should('be.visible')
    });  

    it('Deve verificar para cada campo msg do preenchimento incorreto', () => {
      
      cy.getByData('register').click()
      cy.getByData('email').click()
      cy.getByData('email').type('guilherme@hotmail,com')
      cy.getByData('fullName').click()
      cy.getByData('fullName').type('G')
      cy.getByData('registerUserName').click()
      cy.getByData('registerUserName').type('GUILHERME')
      cy.getByData('registerPassword').click()
      cy.getByData('registerPassword').type('123456')
      cy.getByData('btnRegister').click()

      cy.contains('Invalid e-mail').should('be.visible')
      cy.contains('Mininum length is 2').should('be.visible')
      cy.contains('Must be lower case').should('be.visible')
      cy.contains('Mininum length is 8').should('be.visible')
    });
  })