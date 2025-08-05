describe('email input', () => {
  it('Verificando o tipo do email digitado', () => {
    cy.visit('http://localhost:3000')
    cy.get('#email-address').type('jose@sigex.com')
  })
})