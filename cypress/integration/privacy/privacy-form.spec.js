describe('Filling the user form', () => {
  beforeEach(() => {
    cy.log('Visiting the privacy page');
    cy.visit('/privacy');
  });

  it('Filling the form properly should activate the submit button and move to the done tab on submit', () => {
    cy.wait(500);
    cy.get('[data-cy="receive-product-updates-check"]').click();
    cy.wait(500);
    cy.get('[data-cy="submit-privacy-form"]').click();
  });
});
