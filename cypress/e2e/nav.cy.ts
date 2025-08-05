describe('navigation', () => {
  it('Verificando se a navegacao esta funcionando', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="course-0"]').click()
    cy.url().should('include', '/testing-your-first-application')
  })
})