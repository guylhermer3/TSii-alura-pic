describe('Pagina de cadastro, cenário de cadastro com sucesso', () => {
  beforeEach(()=>{
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })

  it('Deve realizar cadastro com sucesso', () => {
    cy.getByData('register').click()
    cy.getByData('email').click()
    cy.getByData('email').type('guilherme@gmail.com')
    cy.getByData('fullName').click()
    cy.getByData('fullName').type('Guilherme Rodrigues')
    cy.getByData('registerUserName').click()
    cy.getByData('registerUserName').type('guilherme')
    cy.getByData('registerPassword').click()
    cy.getByData('registerPassword').type('123456789')
    cy.getByData('btnRegister').click()
  });
})