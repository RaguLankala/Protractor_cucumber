/**
 * Created by 502620901 on 6/13/2016.
 */
var loginPage = require('../Pages/login-page.js');
var logoutPage = require('../Pages/logout-page.js');
var dashboardPage = require('../Pages/dashboard-page.js');
var commonElementPage = require('../Pages/common-element-page.js');
var loading = $("div[class*='loadingCredentials']");

describe('Asset Browser Navigation', function(){
    
        var openLevel = function(value1, value2, value3){
            dashboardPage.clickHeader(value1).click();
            dashboardPage.selectElement(value2).click();
            dashboardPage.open(value3).click();
        };

        // it('Login', function() {
        //     loginPage.login(browser.params.baseUrl, browser.params.username, browser.params.password);
        // });
    
        beforeAll(function(){
        loginPage.login(browser.params.baseUrl, browser.params.username, browser.params.password);
        });

        it('It should verify whether the user is able to navigate into Atlantis', function(){
            dashboardPage.clickHeader("Select Dashboard").click();
            dashboardPage.selectElement("BP").click();
            dashboardPage.selectElement("GOM").click();
            dashboardPage.selectElement("Atlantis").click();
            dashboardPage.open("Atlantis").click();
            browser.wait(EC.visibilityOf(dashboardPage.selectElement("Platform"), browser.params.timeOut));
            expect(dashboardPage.checkDashboard()).toBe("ATLANTIS");
            dashboardPage.checkHeatMap();
            dashboardPage.checkAssociateTrends(browser.params.atlantisAssociateTrend1);
            dashboardPage.checkAssociateTrends(browser.params.atlantisAssociateTrend2);
            dashboardPage.checkAssociateTrends(browser.params.atlantisAssociateTrend3);
            dashboardPage.checkAssociateTrends(browser.params.atlantisAssociateTrend4);
            dashboardPage.checkAssociateTrends(browser.params.atlantisAssociateTrend5);
        });

        it('It should verify whether the user is able to navigate into Gas Compression', function(){
            openLevel("Atlantis","Gas Compression","Gas Compression");
            // dashboardPage.clickHeader("Atlantis").click();
            // dashboardPage.selectElement("Gas Compression").click();
            // dashboardPage.open("Gas Compression").click();
            browser.wait(EC.visibilityOf(dashboardPage.selectElement("Systems"), browser.params.timeOut));
            expect(dashboardPage.checkDashboard()).toBe("GAS COMPRESSION");
            dashboardPage.checkHeatMapDrill();
        });

        it('It should verify whether the user is able to navigate into train BC1', function(){
            dashboardPage.clickHeader("Gas Compression").click();
            dashboardPage.selectElement("Booster Gas Compression").click();
            dashboardPage.selectElement("BC1").click();
            dashboardPage.open("BC1").click();
            browser.wait(EC.visibilityOf(dashboardPage.selectElement("Trains"), browser.params.timeOut));
            expect(dashboardPage.checkDashboard()).toBe("BC1");
            dashboardPage.checkPFDViewer();
        });

        it('It should verify whether the user is able to navigate into train BC2', function(){
            openLevel("BC1","BC2","BC2");
            // dashboardPage.clickHeader("BC1").click();
            // dashboardPage.selectElement("BC2").click();
            // dashboardPage.open("BC2").click();
            browser.wait(EC.visibilityOf(dashboardPage.selectElement("Trains"), browser.params.timeOut));
            expect(dashboardPage.checkDashboard()).toBe("BC2");
            dashboardPage.checkPFDViewer();
        });

        it('It should verify whether the user is able to navigate into train EX1', function(){
            dashboardPage.clickHeader("BC2").click();
            dashboardPage.selectElement("Export Gas Compression").click();
            //browser.sleep(2000);
            dashboardPage.selectElement("EX1").click();
            dashboardPage.open("EX1").click();
            browser.wait(EC.visibilityOf(dashboardPage.selectElement("Trains"), browser.params.timeOut));
            expect(dashboardPage.checkDashboard()).toBe("EX1");
            dashboardPage.checkPFDViewer();
        });

        it('It should verify whether the user is able to navigate into train EX2', function(){
            dashboardPage.clickHeader("EX1").click();
            dashboardPage.selectElement("EX2").click();
            dashboardPage.open("EX2").click();
            browser.wait(EC.visibilityOf(dashboardPage.selectElement("Trains"), browser.params.timeOut));
            expect(dashboardPage.checkDashboard()).toBe("EX2");
            dashboardPage.checkPFDViewer();
        });

        it('It should verify whether the user is able to navigate into train VR1', function(){
            dashboardPage.clickHeader("EX2").click();
            dashboardPage.selectElement("Vapor Recovery Unit").click();
            dashboardPage.selectElement("VR1").click();
            dashboardPage.open("VR1").click();
            browser.wait(EC.visibilityOf(dashboardPage.selectElement("Trains"), browser.params.timeOut));
            expect(dashboardPage.checkDashboard()).toBe("VR1");
            dashboardPage.checkPFDViewer();
        });

        it('It should verify whether the user is able to navigate into train VR2', function(){
            dashboardPage.clickHeader("VR1").click();
            dashboardPage.selectElement("VR2").click();
            dashboardPage.open("VR2").click();
            browser.wait(EC.visibilityOf(dashboardPage.selectElement("Trains"), browser.params.timeOut));
            expect(dashboardPage.checkDashboard()).toBe("VR2");
            dashboardPage.checkPFDViewer();
        });
    
});

