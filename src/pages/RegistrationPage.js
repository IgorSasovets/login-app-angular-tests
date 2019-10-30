'use strict';

class RegistrationPage {

  constructor() {
    this.firstNameField = element(by.name('firstName'));
    this.lastNameField = element(by.name('lastName'));
    this.userNameField = element(by.name('username'));
    this.passwordField = element(by.name('password'));
    this.registerButton = element(by.buttonText('Register'));
  }

  async navigateToRegistration(pageUrl) {
    await browser.get(pageUrl);
    return browser.wait(EC.visibilityOf(this.registerButton), 20000);
  }

  async registerUser(userData) {
    await this.firstNameField.sendKeys(userData.firstName);
    await this.lastNameField.sendKeys(userData.lastName);
    await this.userNameField.sendKeys(userData.userName);
    await this.passwordField.sendKeys(userData.password);
    return this.registerButton.click();
  }
}

module.exports = new RegistrationPage();