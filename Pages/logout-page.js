/**
 * Created by 502620901 on 6/16/2016.
 */
var LogoutPage = function () {

    this.selectElement = function() {
        browser.wait(EC.visibilityOf(element(by.xpath("//div[text()='qa Poa']")), browser.params.timeOut));
        return element(by.xpath("//div[text()='qa Poa']"));
    };
    // this.hoverOnSignout = function () {
    //     return element(by.css("span[class='u-mh-- style-scope px-login']"));
    // };

    this.clickSignout = function () {
        //return element(by.cssContainingText('li.style-scope.px-login','Sign Out'));
        browser.wait(EC.visibilityOf(element(by.xpath("//a[@title='Log Out']")), browser.params.timeOut));
        return element(by.xpath("//a[@title='Log Out']"));
    };
};

module.exports = new LogoutPage();
