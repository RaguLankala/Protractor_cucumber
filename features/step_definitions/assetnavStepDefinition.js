/**
 * Created by 502620901 on 10/20/2016.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

var assetNavPage = require('../../Pages/assetnav-page.js');
var commonElementPage = require('../../Pages/common-element-page.js');

chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function() {

    this.Given(/^I click on header in asset browser$/, function () {
        assetNavPage.clickHeader().click();
    });

    this.When(/^I click on "([^"]*)"$/, function (value) {
        assetNavPage.selectElement(value).click();
    });

    this.Then(/^I should see "([^"]*)" page\.$/, function (value) {
        assetNavPage.open(value).click();
        expect(assetNavPage.checkDashboard()).to.eventually.equal(value.toUpperCase());
    });

};