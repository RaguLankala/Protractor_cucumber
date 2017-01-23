var assetNavigationPage = function() {

    var header = element(By.xpath("//span[@class= 'style-scope px-context-browser']"));
    var spinner = $("px-spinner[style*='display: none']");
    var assertElement = element(by.css("span[class='style-scope px-context-browser']"));

    this.clickHeader = function () {
        //var header = element(By.xpath("//span[@class= 'style-scope px-context-browser']"));
        browser.wait(EC.visibilityOf(header, browser.params.timeOut));
        return header;
    };

    this.selectElement = function (value) {
        var elementToClick = element(By.id(value));
        //var spinner = $("px-spinner[style*='display: none']");
        browser.wait(EC.presenceOf(spinner, browser.params.timeOut));
        browser.wait(EC.presenceOf($("div[style*='display: none']"), browser.params.timeOut));
        browser.wait(EC.presenceOf(elementToClick, browser.params.timeOut));
        browser.wait(EC.elementToBeClickable(elementToClick, browser.params.timeOut));
        return elementToClick;
    };

    this.open = function (value) {
        //var spinner = $("px-spinner[style*='display: none']");
        var openButton = $("button[key='" + value + "']");
        browser.wait(EC.presenceOf(spinner, browser.params.timeOut));
        browser.wait(EC.invisibilityOf($("div[class='overlay style-scope px-context-browser']"), browser.params.timeOut));
        browser.wait(EC.elementToBeClickable(openButton, browser.params.timeOut));
        return openButton;
    };

    this.checkDashboard = function () {
        //var assertElement = element(by.css("span[class='style-scope px-context-browser']"));
        browser.wait(EC.visibilityOf(assertElement, browser.params.timeOut));
        return assertElement.getText();
    };

};

module.exports = new assetNavigationPage();