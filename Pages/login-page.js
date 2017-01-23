var LoginPage = function() {
		this.login = function(url, username, password) {
		browser.driver.manage().window().maximize();
		browser.driver.get(url);
		browser.wait(EC.visibilityOf($("input[name='username']")), browser.params.timeOut);
		browser.driver.findElement(by.name('username')).sendKeys(username);
		browser.driver.findElement(by.name('password')).sendKeys(password);
		browser.driver.findElement(by.css("input[value='Sign in']")).click().then(function() {
			browser.wait(EC.stalenessOf($("div[class*='loadingCredentials']"), browser.params.timeOut));
        });
	};
};

module.exports = new LoginPage();
