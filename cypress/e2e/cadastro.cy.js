//testando git//
describe('Validar acesso a pagina',() => {
    beforeEach(()=> {

    cy.visit('http://advantageonlineshopping.com')
    })

    it('Cadastrar usuário',() => {
    cy.get('#menuUserSVGPath').click()


    })

})