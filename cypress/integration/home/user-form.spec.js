describe('Filling the user form', () => {
  beforeEach(() => {
    cy.log('Visiting http://localhost:3000');
    cy.visit('/');
  });

  it('Filling the form properly should activate the submit button and move to the privacy tab on submit', () => {
    cy.wait(500);
    cy.get('[data-cy="name-input"]').clear().type('John Smith');
    cy.wait(500);
    cy.get('[data-cy="role-input"]').clear().type('Project Manager');
    cy.wait(500);
    cy.get('[data-cy="email-input"]').clear().type('johnsmith@tray.io');
    cy.wait(500);
    cy.get('[data-cy="password-input"]').clear().type('J0nathanSmith1');
    cy.wait(500);
    cy.get('[data-cy="submit-user-form"]').click();
  });
});
