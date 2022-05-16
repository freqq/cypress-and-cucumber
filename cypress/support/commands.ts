// @ts-check
///<reference path="../global.d.ts" />

Cypress.Commands.add("getBySelector", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("getBySelectorLike", (selector, ...args) => {
  return cy.get(`[data-test*=${selector}]`, ...args);
});
