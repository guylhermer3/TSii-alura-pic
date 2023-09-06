describe('Pagina de login', () => {
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
    
  it('Deve realizar login com sucesso', () => {
    cy.getByData('loginUserName').click()
    cy.getByData('loginUserName').type('guilherme')
    cy.getByData('loginPassword').click()
    cy.getByData('loginPassword').type('123456789')
    cy.getByData('loginBtn').click()
  });
  })