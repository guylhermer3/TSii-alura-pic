describe('Login ok', () => {
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
    
  it('Usuario deve conseguir logar sucesso', () => {
    cy.getByData('loginUserName').click()
    cy.getByData('loginUserName').type('guilherme')
    cy.getByData('loginPassword').click()
    cy.getByData('loginPassword').type('123456789')
    cy.getByData('loginBtn').click()
  });
  })