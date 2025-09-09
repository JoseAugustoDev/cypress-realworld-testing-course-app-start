describe('navigation', () => {
  it('Verificando se a navegacao esta funcionando', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Get started').click()
    cy.url().should('include', '/testing-your-first-application')
  })
})