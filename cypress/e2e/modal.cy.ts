it('deve abrir o modal ao clicar no botão', () => {
    cy.visit('http://localhost:3000')   
    
    cy.get('[data-test="courses-dropdown"]').as('botaoDropdown')

    cy.get('@botaoDropdown').parent().should('be.visible')
    
    cy.get('@botaoDropdown').click()

})