describe('Tabs Selection on the Index Page', () => {
  beforeEach(() => {
    cy.log('Visiting http://localhost:3000');
    cy.visit('/');
  });

  it('Should allow switching between the tabs', () => {
    cy.wait(500);
    cy.get('[data-cy="privacy-tab"]').click();
    cy.wait(500);
    cy.get('[data-cy="done-tab"]').click();
  });
});
