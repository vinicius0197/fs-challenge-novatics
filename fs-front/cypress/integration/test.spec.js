describe('This is a dummy spec', () => {
  it('Does absolutely nothing', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Hello');
  });
});