Cypress.Commands.add('login', (username, password) => {
  cy.session(
    [username, password],
    () => {
      cy.visit('/');
      cy.wait(3000)
    },
  );
  cy.visit('/');
});