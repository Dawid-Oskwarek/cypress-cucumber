const button = () => cy.get('.buttonClass');

function clickButton() {
    button().click();
}

export { clickButton }


