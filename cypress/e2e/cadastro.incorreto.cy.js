describe('Formulário de Cadastro', () => {
    beforeEach(()=>{
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Deve dar cadastro incorreto', () => {
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
    });
  })