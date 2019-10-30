'use strict';
const HomePage = require('./HomePage');

class LoginPage {
  
  constructor() {
    this.userNameField = element(by.name('username'));
    this.passwordField = element(by.name('password'));
    this.loginButton = element(by.buttonText('Login'));
  }

  async loginUser(userName, password) {
    await this.userNameField.sendKeys(userName);
    await this.passwordField.sendKeys(password);
    await this.loginButton.click();
    return browser.wait(EC.visibilityOf(HomePage.deleteUserButton), 15000);
  }
}

module.exports = new LoginPage();