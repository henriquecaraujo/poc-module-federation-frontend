describe('Sales experience writed in Angular', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('displays two todo items by default', () => {
    cy.get('h1').should('have.text', 'Catalog')
    cy.get('li').first().should('contains.text', 'Angular')
    cy.get('li').last().should('contains.text', 'Vue')
  })

  it('can see product details', () => {
    cy.get('li').first().should('contains.text', 'Angular').click()
    cy.get('sales-experience-form').should('have.text', 'Angular CLI Logo')
  })
})
