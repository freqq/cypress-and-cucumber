/// <reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import googlePage from "../../pages/googlePage";

Given("I have access to Google website", () => {});

When("I visit this page", () => {
  cy.visit("https://www.google.com");
  googlePage.elements.consentButton().click();
});

And("I search for results", () => {
  googlePage.typeSearch("search text");
});

Then("Results are available", () => {
  console.log("Works");
});
