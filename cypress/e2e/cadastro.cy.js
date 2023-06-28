
//testando git//
describe('Validar Página', () => {
    beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
}) 

    it('Preencher novo cadastro"', () =>  {
    cy.get('#signup').click()
    cy.get('#firstName').type('Leidiane')
    cy.get('#lastName').type('Souza')
    cy.get('#email').type('leidiane5499@hotmail.com')
    cy.get('#password').type('1234567')
    cy.get('#submit').click()
})


})

    
