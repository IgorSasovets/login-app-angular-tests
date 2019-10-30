'use strict';

exports.config = {
  directConnect: true,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  params: {
    registrationPageUrl: 'http://localhost:3000/register',
    loginPageUrl: 'http://localhost:3000/login',
    homePageUrl: 'http://localhost:3000'
  },
  specs: [
    'test/test-case-example.js'
  ],
  onPrepare: function() {
    global.faker = require('faker');
    global.EC = protractor.ExpectedConditions;
  }
}
