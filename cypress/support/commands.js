//Cypress.Commands.add('generateFixture', () => {
const faker = require('faker')

Cypress.Commands.add('sitio', () => {

  cy.visit('https://automationstore.onlineweb.shop/')
})

Cypress.Commands.add('generaDataUsers', () => {
  const faker = require('faker')

  cy.writeFile('cypress/fixtures/dataAutomationStore/usersData.json', {

    'users': Cypress._.times(1, () => {
      return {
        'Email': `${faker.internet.email()}`,
        'Pass': `${faker.random.alphaNumeric(10)}`,
        'FirstName': `${faker.name.firstName()}`,
        'LastName': `${faker.name.lastName()}`,
        "AddressLine1": `${faker.address.streetAddress()}`,
        "CityTown": `${faker.address.city()}`,
        "County": `${faker.address.county()}`,
        "PostZipCode": `${faker.address.zipCode()}`,
        "Telephone": `${faker.phone.phoneNumber('+56 9 ### ## ##')}`,
      }
    })
  })
})


Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
  // Wait until the iframe (Google reCAPTCHA) is totally loaded
  cy.wait(500);
  cy.get('[style="margin: 0px auto; top: 0px; left: 0px; right: 0px; position: absolute; border: 1px solid rgb(204, 204, 204); z-index: 2000000000; background-color: rgb(255, 255, 255); overflow: hidden; width: 400px; height: 580px;"] > iframe')
  .first()
  .then((recaptchaIframe) => {
    const body = recaptchaIframe.contents()
    cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
  })
});



let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorageCache', () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorageCache', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add("clearLocalStorageCache", () => {
  localStorage.clear();
  LOCAL_STORAGE_MEMORY = {};
});
