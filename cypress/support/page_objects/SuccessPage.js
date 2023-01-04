const successMessage = () => cy.contains('Button success');

function isSuccessMessageVisible() {
    successMessage().should('be.visible');
}

export { isSuccessMessageVisible }


