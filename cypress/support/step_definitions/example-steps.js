import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { clickButton } from "../page_objects/HtmlElementsPage";
import { isSuccessMessageVisible } from "../page_objects/SuccessPage";


Given('I access the website', () => {
    cy.visit('/');
});

When('I click on class button', () => {
    clickButton();
});

Then('I receive a success message', () => {
    isSuccessMessageVisible();
});