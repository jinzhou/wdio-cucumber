exports.config = {

   // basic settings
   // see: http://webdriver.io/guide/getstarted/configuration.html
   baseUrl: 'http://localhost:8080',

   specs: [
      './src/features/**/drag.feature',
   ],
   exclude: [
      // 'path/to/excluded/files'
   ],

   // Level of logging verbosity: silent | verbose | command | data | result | error
   logLevel: 'error',

   // Enables colors for log output
   coloredLogs: true,

   // set to false if you want to run your tests in an async way using promises
   sync: true,

   waitforTimeout: 1000,

   waitforInterval: 500,

   connectionRetryTimeout: 90000,

   connectionRetryCount: 3,

   // Saves a screenshot to a given path if a command fails
   screenshotPath: './screenshots/',

   // see: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
   capabilities: [
      {
         browserName: 'chrome',
         maxInstances: 5
      }
   ],

   // Test runner configuration
   // see: http://webdriver.io/guide/testrunner/configurationfile.html
   services: ['selenium-standalone'],

   // see: http://webdriver.io/guide/testrunner/reporters.html
   reporters: ['spec'],

   // see: http://webdriver.io/guide/testrunner/frameworks.html
   framework: 'cucumber',

   // see: https://github.com/webdriverio/wdio-cucumber-framework#cucumberopts-options
   cucumberOpts: {
      // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE
      compiler: ['js:babel-register'],

      // <regex[]> only execute the scenarios with name matching the expression (repeatable)
      //name: [],

      // <string[]> specify the profile to use
      //profile: [],

      // <string[]> (file/dir) require files before executing features
      require: [
         './src/steps/given.js',
         './src/steps/then.js',
         './src/steps/when.js'
      ],

      // <string> (expression) only execute the features or scenarios with
      // tags matching the expression
      // see: https://docs.cucumber.io/tag-expressions/
      tagExpression: 'not @Pending',

      // <number> timeout for step definitions
      timeout: 30000,

      // <boolean> show full backtrace for errors
      backtrace: false,

      // <boolean> hide step definition snippets for pending steps
      snippets: true,

      // <boolean> hide source uris
      source: true,

      // <boolean> fail if there are any undefined or pending steps
      strict: true,

      // <boolean> abort the run on first failure
      failFast: false,

      // <boolean> treat ambiguous definitions as error
      failAmbiguousDefinitions: true,

      // <boolean> treat undefined definitions as warnings
      ignoreUndefinedDefinitions: false
   },

   // WebdriverIO provides a several hooks you can use to interfere the test process
   // see: http://webdriver.io/guide/testrunner/configurationfile.html
   onPrepare: function (config, capabilities) {
   },

   before: function before(capabilities, specs) {
      /**
       * Setup the Chai assertion framework
       */
      const chai = require('chai');

      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
   },

   beforeSession: function (config, capabilities, specs) {
   },
   afterSession: function (config, capabilities, specs) {
   },

   beforeSuite: function beforeSuite(suite) {
   },
   afterSuite: function afterSuite(suite) {
   },

   beforeHook: function beforeHook() {
   },
   afterHook: function afterHook() {
   },

   beforeTest: function beforeTest(test) {
   },
   afterTest: function afterTest(test) {
   },

   beforeCommand: function beforeCommand(commandName, args) {
   },
   afterCommand: function afterCommand(commandName, args) {
   },

   // @param {Number} exitCode 0 - success, 1 - fail
   after: function after(exitCode, capabilities, specs) {
   },

   // @param {Number} exitCode 0 - success, 1 - fail
   onComplete: function onComplete(exitCode, config, capabilities) {
   },

   // Cucumber specific hooks
   beforeScenario: function (scenario) {
   },
   afterScenario: function (scenario) {
   },

   beforeFeature: function (feature) {
   },
   afterFeature: function (feature) {
   },

   beforeStep: function (step) {
   },
   afterStep: function (step) {
   }
};
