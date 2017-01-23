var logoutPage = require('../../Pages/logout-page.js');
var loginPage = require('../../Pages/login-page.js');

var hooks = function hooks() {
    this.Before({tags: ["@beforescenario"]},function(){
        loginPage.login(browser.params.baseUrl, browser.params.username, browser.params.password);
    });

    this.After({tags: ["@afterscenario"]},function(){
        console.log("hooks is loaded");
        logoutPage.selectElement().click();
        logoutPage.clickSignout().click();
    });
};

module.exports = hooks;