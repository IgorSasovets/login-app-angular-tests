'use strict';
const params = browser.params;
const RegistrationPage = require('../src/pages/RegistrationPage');
const LoginPage = require('../src/pages/LoginPage');
const HomePage = require('../src/pages/HomePage');
let newUser;

describe('Login app with redirect tests', () => {
    beforeAll(async() => {
      newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userName: faker.internet.userName(),
        password: faker.internet.password()
      };
      return RegistrationPage.navigateToRegistration(params.registrationPageUrl);
    });
    it('Should register user in system', async() => {
      await RegistrationPage.registerUser(newUser);
      expect(LoginPage.loginButton.isDisplayed()).toBe(true);
    });
    it('Should login user into system', async() => {
      await LoginPage.loginUser(newUser.userName, newUser.password);
      expect(HomePage.usersListFirstUser.isPresent()).toBe(true);
    });
});