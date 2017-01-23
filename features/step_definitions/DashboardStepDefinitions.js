var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

var dashboardPage = require('../../Pages/dashboard-page.js');
var commonElementPage = require('../../Pages/common-element-page.js');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

    //this.setDefaultTimeout(60000);
    this.Given(/^I hover on "([^"]*)" with "([^"]*)"$/, function (value1, value2) {
        dashboardPage.hoverOverKPI(value1,value2);
    });

    this.Then(/^the count of "([^"]*)" with "([^"]*)" should be equal to displayed count$/, function (value1, value2) {

        var hoverCount = dashboardPage.getHoverResultCount(value1, value2).count();

        dashboardPage.getAssertCount(value1, value2).getText().then(function(text) {
            var assertValue = parseInt(text);
            expect(Promise.resolve(hoverCount)).to.eventually.equal(assertValue);
        });

    });

    this.Then(/^count displayed on "([^"]*)" with "([^"]*)" should be equal to "([^"]*)" images in hover result\.$/, function (value1, value2, value3) {
        var hoverCount = dashboardPage.getHoverResultCount(value1, value2).count();
        dashboardPage.getHoverResultImageCount(value1, value2, value3).count().then(function(assertValue) {
            expect(Promise.resolve(assertValue)).to.eventually.equal(hoverCount);
        });

    });

    this.Given(/^I hover on "([^"]*)" with "([^"]*)" and get the hover result count$/, function (value1, value2) {

        getSpineCount = (function() {
            return {
                value: function() {
                    return dashboardPage.getHoverResultCount(value1, value2).count().then( function(count) {
                        return count;
                    });
                }
            };
        }) ();

        assertCount = getSpineCount.value().then(function(count){
            return count - 1;
        });

    });

    this.When(/^I click on first link in hover result of "([^"]*)" with "([^"]*)"\.$/, function (value1, value2) {
        var linkText = dashboardPage.clickFirstHoverResult(value1, value2).getText().then(function(text){
            return text;
        });
        dashboardPage.clickFirstHoverResult(value1, value2).click();
        var spinner = $("px-spinner[style*='display: none']");
        browser.wait(EC.presenceOf(spinner, browser.params.timeOut));
        // dashboardPage.checkHighligtedElement(linkText).count().then( function(count) {
        //    console.log("Element Count: " + count);
        // });
        expect(dashboardPage.checkHighligtedElement(linkText).isPresent()).to.become(false);
    });

    this.When(/^I click on status dropdown$/, function () {
        dashboardPage.clickCaseStatusDropdown.click();
    });

    this.When(/^I select "([^"]*)"$/, function (value) {
        dashboardPage.selectValueFromDropdown(value).click();
    });

    this.When(/^I see a case closure modal dialogue$/, function () {
        dashboardPage.waitForCaseClosureModalDialogue();
    });

    this.When(/^I click on No Action Needed checkbox$/, function () {
        dashboardPage.checkNoActionNeeded().isSelected().then(function(selected){
            if(selected === true){
                dashboardPage.checkNoActionNeeded().click();
            }
        });

        dashboardPage.checkNoActionNeeded().click();
    });

    this.When(/^I click on "([^"]*)"$/, function (value) {
        dashboardPage.clickCloseButton(value).click();
    });

    this.When(/^I click "([^"]*)" in Navigation Item\.$/, function (value) {
        dashboardPage.clickNavItem(value).click();
    });

    this.Then(/^the count of "([^"]*)" with "([^"]*)" should be decreased by one\.$/, function (value1, value2) {

        dashboardPage.hoverOverKPI(value1, value2);

        dashboardPage.getAssertCount(value1, value2).getText().then(function(text) {
            var actualCount = parseInt(text);
            expect(Promise.resolve(assertCount)).to.eventually.equal(actualCount);
        });

    });

    this.When(/^I click on system trends\.$/, function () {
        browser.actions().mouseDown(dashboardPage.clickSystemTrends()).perform();
        browser.sleep(1000);
        browser.actions().mouseUp().perform();
    });

    this.When(/^I click on button$/, function () {
        browser.actions().click(dashboardPage.clickAddToWatchlist()).perform();
    });

    this.When(/^I click on checkbox of "([^"]*)"$/, function (value) {
        dashboardPage.clickCheckBox(value).click();
    });

};