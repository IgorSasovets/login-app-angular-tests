'use strict';

class HomePage {
  
  constructor() {
    this.deleteUserButton = element(by.linkText('Delete'));
    this.usersListFirstUser = $$('ul>li').get(0);
  }
}

module.exports = new HomePage();
