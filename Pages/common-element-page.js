var CommonElementPage = function() {  
  this.waitForElementVisibility = function(selector) {
    return browser.wait(EC.visibilityOf(selector, browser.params.timeOut));
  };

  this.waitForElementInvisibility = function(selector) {
    return browser.wait(EC.invisibilityOf(selector, browser.params.timeOut));
  };

  // this.selectDate = function(value) {
  //   $("i[class*='fa-calendar']").click().then(function(value){
  //     browser.wait(EC.presenceOf($('dateRangePicker'), browser.params.timeOut));
  //     browser.actions().doubleClick(element.all(by.xpath("//div[contains(@class,'px-calendar-cell']/button[text()='"+value+"'")).first()).perform();
  //     $('submitButton').click();
  //   });
  //
  // };
};

module.exports = new CommonElementPage();
