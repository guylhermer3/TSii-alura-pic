describe('Funcionalidades Foto, cenário de sucesso', () => {
    beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Deve cadastrar com sucesso uma foto', () => {
        cy.getByData('loginUserName').type('guilherme')
        cy.getByData('loginPassword').type('123456789')
        cy.getByData('loginBtn').click()
        cy.get(':nth-child(2) > a > .fa').click()
        cy.get('[type="file"]').selectFile('abobora1.jpg', {force:true})
        cy.get('[placeholder="photo description"]').type('Halloween 2023')
        cy.get('[type="checkbox"]').click()
        cy.get('[type="checkbox"]').click()
        cy.get('[type="submit"]').click()
        cy.contains('Upload complete').should('be.visible')
        cy.wait(1000)
        cy.get(':nth-child(2) > a > .fa').click()
        cy.get('[type="file"]').selectFile('abobora1.jpg', {force:true})
        cy.get('[placeholder="photo description"]').type('Bolacha 2023')
        cy.get('[type="checkbox"]').click()
        cy.get('[type="checkbox"]').click()
        cy.get('[type="submit"]').click()
        cy.contains('Upload complete').should('be.visible')
    })

    it('Deve dar like e comentar na foto', () => {
        cy.getByData('loginUserName').type('guilherme')
        cy.getByData('loginPassword').type('123456789')
        cy.getByData('loginBtn').click()
        cy.get('.img-thumbnail').first().click()
        cy.wait(1000)
        cy.get('.img-thumbnail').last().click()
        cy.get('.fa-heart-o').click()
        cy.wait(1000)
        cy.get('[formcontrolname="comment"]').type('Ai que delícia!')
        cy.get('[type="submit"]').click()
        cy.wait(5000)
        cy.get('.fa-trash-o').click()
    })

    it('Deve Pesquisar uma foto entre duas opções', () => {

    })

    it('Deve Remover uma foto com sucesso', () => {
        cy.getByData('loginUserName').type('guilherme'); 
        cy.getByData('loginPassword').type('123456789');       
        cy.getByData('loginBtn').click();     
        cy.get('.img-thumbnail').first().click();
        cy.get('.fa-trash-o').click();
        cy.get('button').click()
    })
})