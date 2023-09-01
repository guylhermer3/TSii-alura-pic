describe('Formulário de Cadastro',() => {
    beforeEach(()=>{

      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
    it('Usuario deve conseguir se cadastrar com sucesso', () => {
        cy.getByData('register').click()
        cy.getByData('email').type('guilherme@gmail.com')
        cy.getByData('fullName').type('Guilherme Rodrigues')
        cy.getByData('registerUserName').type('Guilherme')
        cy.getByData('registerPassword').type('123456789')
        cy.getByData('btnRegister').click()

    
      });
    
  })
  