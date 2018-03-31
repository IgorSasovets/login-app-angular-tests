'use strict';
const params = browser.params;
const EC = protractor.ExpectedConditions;
const GeneralPageObject = require('./GeneralPageObject');
let newUser;

describe('Login app with redirect tests', () => {
    beforeAll(() => {
      newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userName: faker.internet.userName(),
        password: faker.internet.password()
      };
      browser.get(params.registrationPageUrl);
      return browser.wait(EC.visibilityOf(GeneralPageObject.RegistrationPage.registerButton), 20000);
    });
    it('Should register user in system', () => {
      return GeneralPageObject.RegistrationPage.registerUser(newUser)
        .then(() => {
          expect(GeneralPageObject.LoginPage.loginButton.isDisplayed()).toBe(true);
        });
    });
    it('Should login user into system', () => {
      return GeneralPageObject.LoginPage.loginUser(newUser.userName, newUser.password)
        .then(() => browser.wait(EC.visibilityOf(GeneralPageObject.HomePage.deleteUserButton), 15000))
        .then(() => {
          expect(GeneralPageObject.HomePage.usersListFirstUser.isPresent()).toBe(true);
        });
    });
});
