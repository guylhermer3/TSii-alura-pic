describe('Funcionalidades Foto, cenário de sucesso', () => {
    beforeEach(()=>{
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    it('Deve cadastrar com sucesso uma foto', () => {
        cy.getByData('loginUserName').click()
        cy.getByData('loginUserName').type('guilherme')
        cy.getByData('loginPassword').click()
        cy.getByData('loginPassword').type('123456789')
        cy.getByData('loginBtn').click()
        cy.get('.fa-plus-circle').click();
        cy.get('[type="file"]').selectFile('abobora1.jpg', {force: true});
        cy.get('[placeholder="photo description"]').type('Halloween 2023')
        cy.get('[type="checkbox"]').click()
        cy.get('[type="checkbox"]').click()
        cy.get('[type="submit"]').click()
    });

    it('Deve dar like e comentar na foto', () => {
        cy.getByData('loginUserName').click()
        cy.getByData('loginUserName').type('guilherme')
        cy.getByData('loginPassword').click()
        cy.getByData('loginPassword').type('123456789')
        cy.getByData('loginBtn').click()
        cy.get('.img-thumbnail').first().click()
        cy.get('.fa-heart-o').click()
        cy.get('textarea').click()
        cy.get('textarea').type('Ai que delícia!')
        cy.get('.btn').click()

    });
})