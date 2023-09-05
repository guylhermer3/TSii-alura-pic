describe('Login ok', () => {
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
    
  it('Deve dar login incorreto', () => {
    cy.getByData('loginUserName').click()
    cy.getByData('loginUserName').type('aline')
    cy.getByData('loginPassword').click()
    cy.getByData('loginPassword').type('987654321')
    cy.getByData('loginBtn').click()
  });
  })