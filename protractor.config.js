/**
 * Created by 502620901 on 6/13/2016.
 */

//var AllureReporter = require('jasmine-allure-reporter');
exports.config = {
    //seleniumServerJar : 'node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
    seleniumServerJar : 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
    chromeDriver: 'node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.25.exe',
    seleniumPort : null,
    seleniumArgs : null,
    troubleshoot : false,

    //frameworks : [ 'jasmine2' ],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities : {
        browserName: 'chrome'
         // browserName : 'phantomjs',
         // 'phantomjs.binary.path' : require('phantomjs').path,
         // 'phantomjs.cli.args' : [ '--ignore-ssl-errors=true', '--web-security=false' ]
    },

    //specs : [ 'specs/asset-browser-nav-spec.js' ],
    specs: [
        'features/dashboard_sys_trends.feature'
    ],
    allScriptsTimeout : 120000,
    getPageTimeout : 60000,

    params : require('./data/test-data.json'),

    onPrepare : function() {
        global.EC = protractor.ExpectedConditions;
        browser.ignoreSynchronization = true;
        //browser.driver.manage().timeouts().implicitlyWait(50000);

        // jasmine.getEnv().addReporter(new AllureReporter({
        //     allureReport: {
        //         resultsDir: 'allure-results'
        //     }
        // }));

        // jasmine.getEnv().afterEach(function(done){
        //     browser.takeScreenshot().then(function (png) {
        //         allure.createAttachment('Screenshot', function () {
        //             return new Buffer(png, 'base64')
        //         }, 'image/png')();
        //         done();
        //     })
        // });
    },

    // jasmineNodeOpts : {
    //     showColors : true,
    //     defaultTimeoutInterval : 60000,
    //     isVerbose : false,
    //     includeStackTrace : false
    // }

    cucumberOpts: {
        require: [
         'features/step_definitions/DashboardStepDefinitions.js',
         'features/support/hooks.js',
         'features/support/env.js'
        ],
        //tags: ['@sys_trends'],
        format: 'pretty',
        profile: false,
        'no-source': true,
        keepAlive: false
    }
};
