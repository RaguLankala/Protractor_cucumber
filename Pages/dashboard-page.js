var DashboardPage = function() {

    this.clickCaseStatusDropdown = element(By.xpath("//span[@id='currentFilterStatus']"));

    this.clickNavItem = function(value) {
        return element(By.xpath("//div[text()='"+value+"']"));
    };

    this.hoverOverKPI = function(value1, value2) {
        browser.wait(EC.invisibilityOf(element(by.xpath("//div[text()='Loading "+value1+"..']/parent::div[@class='style-scope dashboar-header']")), browser.params.timeOut));
        var hoverElement = element(By.xpath("//div[contains(@data-args,'"+value1+","+value2+"')]"));
        browser.wait(EC.visibilityOf(hoverElement, browser.params.timeOut));
      return browser.actions().mouseMove(hoverElement).perform();
    };

    this.getHoverResultCount = function(value1, value2){
        return element.all(By.xpath("//div[contains(@data-args,'"+value1+","+value2+"')]//a"));
    };

    this.getAssertCount = function(value1, value2) {
        return element(By.xpath("//div[contains(@data-args,'"+value1+","+value2+"')]//span[2]"));
    };

    this.getHoverResultImageCount = function(value1, value2, value3){
        return element.all(By.xpath("//div[contains(@data-args,'"+value1+","+value2+"')]//div/img[contains(@src,'"+value3+"')]"));
    };

    this.clickFirstHoverResult = function(value1, value2){
        browser.wait(EC.visibilityOf(element(By.xpath("//div[contains(@data-args,'"+value1+","+value2+"')]//a[1]"))), browser.params.timeOut);
        return element(By.xpath("//div[contains(@data-args,'"+value1+","+value2+"')]//a[1]"));
    };

    this.checkHighligtedElement = function(value) {
        // return element.all(By.xpath("//div[contains(@class,'selected')]/descendant::div[text()='"+value+"']"));
        return element(By.xpath("//div[contains(@class,'selected')]/descendant::div[text()='"+value+"']"));
       // return element(By.xpath("//div[text()='"+value+"']/ancestor::div[contains(@class,'selected')]"));
        // browser.wait(EC.invisibilityOf(element(By.xpath("//div[text()='"+value+"']/ancestor::div[contains(@class,'selected')]")), browser.params.timeOut));
    };

    this.selectValueFromDropdown = function(value) {
        return element(By.xpath("//*[contains(@class,'statusFiltersDropdown')]/ul/li[@id='"+value+"']"));
    };

    this.waitForCaseClosureModalDialogue = function(){
        browser.wait(EC.visibilityOf(element(By.xpath("//h3[text()='Closure']")), browser.params.timeOut));
    };

    this.checkNoActionNeeded = function() {
        browser.wait(EC.presenceOf(element(By.xpath("//input[@id='actionReqCaseClose']")), browser.params.timeOut));
        return element(By.xpath("//input[@id='actionReqCaseClose']"));
    };

    this.clickCloseButton = function(value){
        browser.wait(EC.presenceOf(element(By.xpath("//button[text()='"+value+"']")), browser.params.timeOut));
        return element(By.xpath("//button[text()='"+value+"']"));
    };

    //dashboard_sys_trends

    this.clickSystemTrends = function(){
        var sysTrendsGraph = element(By.css("#highcharts-18 > svg > g.highcharts-series-group"));
        browser.wait(EC.visibilityOf(sysTrendsGraph, browser.params.timeOut));        
        return sysTrendsGraph;        
    };

    this.clickAddToWatchlist = function(){
        browser.wait(EC.visibilityOf(element(By.xpath("//button[@id='watch']")), browser.params.timeOut));
        return element(By.xpath("//button[@id='watch']"));
    };

    this.clickCheckBox = function(value){
        browser.wait(EC.visibilityOf(element(By.xpath("//div[@tag-name='"+value+"']/input")), browser.params.timeOut));
        return element(By.xpath("//div[@tag-name='"+value+"']/input"));
    };
};

module.exports = new DashboardPage();