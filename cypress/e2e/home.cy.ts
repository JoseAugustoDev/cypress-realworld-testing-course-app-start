describe('home page', () => {
  it('Verificando texto', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="hero-heading"]').should('have.text', 'SIGEX')
  })
})