let loginpageObject = require('../pages/loginpage');
let homepageObject = require('../pages/homepage');
let presentmentbillerObject = require('../pages/presentmentbiller');
var testdata = require('../testdata/Testdata_environment.json');

describe('Smoke Tests - Bill payment', function()
{
    beforeEach(function(){
	// 	console.log("Before Each block")
     loginpageObject.get(testdata.url);
    loginpageObject.login(testdata.username,testdata.password);
	 });

    it("Back button on details page should redirect user to the homepage", function()
    {
        // loginpageObject.get(testdata.url);
        // loginpageObject.login(testdata.username,testdata.password);
        homepageObject.clickonViewAll_upcomingPayments();
        homepageObject.clickonPayfromOverlay();
        
        presentmentbillerObject.clickonBackButton();
        expect(browser.getTitle()).toBe('Your Bank - Pay bill')

    })

     it("Initiates and complete Upcoming Payments flow from the dashboard", function()
    {
        // loginpageObject.get(testdata.url);
        // loginpageObject.login(testdata.username,testdata.password);
        homepageObject.clickonViewAll_upcomingPayments();
        homepageObject.clickonPayfromOverlay();
        browser.sleep(1000);
        //presentmentbillerObject.openAccountSelectionOverlay();
       // browser.sleep(10000);
        presentmentbillerObject.selectradiobutton('Other Amount','12121');
        //Enter remarks
        presentmentbillerObject.setRemarks("This is the transaction remark.");
        presentmentbillerObject.clickNextButton();
        browser.sleep(1000);
        presentmentbillerObject.setOTP('123123');
        presentmentbillerObject.clickConfirmButton();
        presentmentbillerObject.verifypaymentStatus('Success') 
        //browser.quit();
    }),

    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

});