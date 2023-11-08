describe('Funcionalidades Foto, cenário incorreto', () => {
    beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Deve retornar erro ao tentar cadastrar foto', () => {
        cy.getByData('loginUserName').type('guilherme')
        cy.getByData('loginPassword').type('123456789')
        cy.getByData('loginBtn').click()

        
        cy.get(':nth-child(2) > a > .fa').click()
        cy.get('[placeholder="photo description"]').type('Halloween 2023')
        cy.get('[type="checkbox"]').click()
        cy.get('[type="checkbox"]').click()

        cy.contains('Please, select a photo').should('be.visible')
    })
})