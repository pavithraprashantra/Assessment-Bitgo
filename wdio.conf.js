const moment = require("moment");

// const loginPage = require("../pages/loginPage");

const log4js = require("log4js");
const fs = require("fs");
const path = require("path");
// const file_path = fs.readFileSync(
//   "C:Users\\2131557\\AppData\\Local\\Google\\Chrome\\UserData\\Default\\Extensions\\efoelbbfbknfhpmgclpcdbkoieedkkai\\2.0_0.crx"
// );
// const base64 = Buffer.from(extension).toString('base64');
//let file_path = "testData/efoelbbfbknfhpmgclpcdbkoieedkkai/2.0_0.crx";
// let buff = new Buffer.from(fs.readFileSync(file_path));
// let base64data = buff.toString("base64");

//import {browser } from "module";
// const url=require('./url')
// const ENV=process.env.ENV

//     if(!ENV || !['uat','stage','prod','trn'].includes(ENV))
//     {
//         console.log("please pass the correct ENV variable")
//         process.exit()
// }

const drivers = {
  //chrome: { version: '96.0.4664.110' }, // https://chromedriver.chromium.org/
  //firefox: { version: '0.29.1' }, // https://github.com/mozilla/geckodriver/releases
  //chromiumedge: { version: '92.0.902.55' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
};

exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: "local",

  path: "wd/hub",
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
  // then the current working directory is where your `package.json` resides, so `wdio`
  // will be called from there.
  //
  specs: [
    // './features/**/*.feature'
    "./features/Handsons/transactionExplorer.feature",
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 10,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //

  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 5,
      //
      browserName: "chrome",
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        excludeSwitches: ["enable-automation"],

        useAutomationExtension: true,
        // args: [ 'disable-infobars', 'disable-notifications' ],
        // args: ['--headless'],

        // extensions: [
        // Entry should be a base64-encoded packed Chrome app (.crx)
        // require('fs').readFileSync('/absolute/path/app.crx').toString('base64')

        //   ],
        // extensions: [base64data],

        // prefs: {
        //   "download.default_directory": path.join(
        //     process.cwd(),
        //     "testData/downloads/"
        //   ),

        prefs: {

          "download.default_directory": path.join(

            process.cwd(),

            "testData/downloads"

          ),

          //   "download.prompt_for_download": false,
          //   "profile.managed_default_content_settings.notifications": 1,
          //   "profile.managed_default_content_settings.popups": 1,
          //   "profile.managed_default_content_settings.infobar": 1,
          //   "profile.default_content_settings.popup": 0,
        },
      },

      // If outputDir is provided WebdriverIO can capture driver session logs
      // it is possible to configure which logTypes to include/exclude.
      // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
      // excludeDriverLogs: ['bugreport', 'server'],
    },
  ],

  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  //logLevel: 'info',

  //logLevel: 'silent',
  //
  // Set specific log levels per logger
  // use 'silent' level to disable logger
  logLevel: "info",
  outputDir: "std",
  // logLevels: {
  //     webdriver: 'error',
  //     devtools: 'silent'
  // },
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: "https://wvi.onelogin.com/",
  //baseUrl:url[process.env.ENV],
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 300000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  // capabilities: {
  //   browserName: "chrome",
  //   //     // 'shardTestFiles': true,
  //   //     'maxInstances': 1,
  //   //     'unexpectedAlertBehaviour': 'accept',
  //   //     //for Parallel run
  //   //     //    "technologyPreview": true
  //   chromeOptions: {
  //     //         args: ['--no-sandbox', '--test-type=browser'],
  //     prefs: {
  //       "download.default_directory":
  //         "C:WDIO_SSUIWV_ReimagineSSUI_WDIO\testDatadownloads",
  //       // download: {
  //       //                 'prompt_for_download': false,
  //       //                 'directory_upgrade': true,
  //       //                 // 'default_directory': downloadsPath
  //     },
  //   },
  // },
  // capabilities: [
  //   {
  //     browserName: "chrome",
  //     // this overrides the default chrome download directory with our temporary one
  //     chromeOptions: {
  //       prefs: {
  //         "download.default_directory":
  //           "C:\\WDIO_SSUI\\WV_ReimagineSSUI_WDIO\\testData\\downloads",
  //       },
  //     },
  //   },
  // ],

  // },
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ["chromedriver"],
  // services:['selenium-standalone',{ drivers: { //firefox: '0.29.1',
  //     chrome:'96.0.4664.110',
  //     //chromiumedge: '92.0.902.55'
  // }}],
  //  services: [
  //     ['selenium-standalone', {
  //         logPath: 'logs',
  //         installArgs: { drivers }, // drivers to install
  //         args: { drivers } // drivers to use
  //     }]
  // ],
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "cucumber",
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  //reporters: ['spec','junit','cucumber'],
  reporters: [
    [
      "spec",
      {
        symbols: {
          passed: "[PASS]",
          failed: "[FAIL]",
          skipped: "[SKIPPED]",
        },
      },
    ],
    [
      "junit",
      {
        outputDir: "./Reporter/junit-reporter",
        outputFileFormat: function (options) {
          // optional
          return `junit-report.xml`;
        },
      },
    ],
    [
      "allure",
      {
        outputDir: "./Reporter/allure-results/",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ['./stepDefinitions/handsonsStep/handsonsteps.js'],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: ["@babel/register"],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: true,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ["pretty"],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "@RegressionTest",
    //tagExpression: "@SmokeTest",
    // tagExpression: '@IntegrationHope',
    // tagExpression: '@Mytasks',
    // tagExpression: "@SanityTest",

    // <number> timeout for step definitions
    timeout: 900000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: true,
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: async function (config, capabilities) {
    console.log("Started");
    if (fs.existsSync("../logs/ExecutionLog.log")) {
      fs.unlinkSync("../logs/ExecutionLog.log");
    }

    log4js.configure({
      appenders: {
        out: {
          type: "stdout",
          layout: {
            type: "pattern",
            pattern: "%[ %c:%l %] %m",
          },
        },
      },
      categories: {
        default: {
          appenders: ["out"],
          level: "info",
          enableCallStack: true,
        },
      },
    });
  },
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
   * @param  {[type]} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {Object}         browser      instance of created browser/device session
   */
  before: async function (capabilities, specs) {
    await browser.maximizeWindow();
    log4js.configure({
      appenders: {
        out: {
          type: "stdout",
          layout: {
            type: "pattern",
            pattern: "%[ %c:%l %] %m",
          },
        },
      },
      categories: {
        default: { appenders: ["out"], level: "info", enableCallStack: true },
      },
    });
  },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Cucumber Hooks
   *
   * Runs before a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // beforeFeature: function (uri, feature) {
  // },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world world object containing information on pickle and test step
   */
  // beforeScenario: function (world) {
  // },
  /**
   *
   * Runs before a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   */
  // beforeStep: function (step, scenario) {
  // },
  /**
   *
   * Runs after a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   * @param {Object}             result   results object containing scenario results
   * @param {boolean}            result.passed   true if scenario has passed
   * @param {string}             result.error    error stack if scenario failed
   * @param {number}             result.duration duration of scenario in milliseconds
   */
  //afterStep: function (step, scenario, result) {
  afterStep: function (test, scenario, { error, duration, passed }) {
    //var date=Date.now();
    // browser.saveScreenshot(
    //   "./Reporter/screenShots/img" +
    //     moment().format("DD-MMM-YYYY-h-mm-ss-a") +
    //     ".png"
    // );
    //}
  },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world  world object containing information on pickle and test step
   * @param {Object}                 result results object containing scenario results
   * @param {boolean}                result.passed   true if scenario has passed
   * @param {string}                 result.error    error stack if scenario failed
   * @param {number}                 result.duration duration of scenario in milliseconds
   */
  afterScenario: async function (world, result) {
    // await loginPage.logoutPortal();
  },
  /**
   *
   * Runs after a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // afterFeature: function (uri, feature) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  //onReload: function(oldSessionId, newSessionId) {
  //}
};
