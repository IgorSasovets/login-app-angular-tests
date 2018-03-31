'use strict';

class RegistrationPage {
  constructor() {
    this.firstNameField = element(by.name('firstName'));
    this.lastNameField = element(by.name('lastName'));
    this.userNameField = element(by.name('username'));
    this.passwordField = element(by.name('password'));
    this.registerButton = element(by.buttonText('Register'));
  }

  registerUser(userData) {
    this.firstNameField.sendKeys(userData.firstName);
    this.lastNameField.sendKeys(userData.lastName);
    this.userNameField.sendKeys(userData.userName);
    this.passwordField.sendKeys(userData.password);
    return this.registerButton.click();
  }
}

class LoginPage {
  constructor() {
    this.userNameField = element(by.name('username'));
    this.passwordField = element(by.name('password'));
    this.loginButton = element(by.buttonText('Login'));
  }

  loginUser(userName, password) {
    this.userNameField.sendKeys(userName);
    this.passwordField.sendKeys(password);
    return this.loginButton.click();
  }
}

class HomePage {
  constructor() {
    this.deleteUserButton = element(by.linkText('Delete'));
    this.usersListFirstUser = $$('ul>li').get(0);
  }
}

module.exports = {
  RegistrationPage: new RegistrationPage(),
  LoginPage: new LoginPage(),
  HomePage: new HomePage()
}
