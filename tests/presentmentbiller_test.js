let loginpageObject = require('../pages/loginpage');
let homepageObject = require('../pages/homepage');
let presentmentbillerObject = require('../pages/presentmentbiller');
var testdata = require('../testdata/testdata.json');

describe('Initiate Upcoming Payments flow', function()
{
    it("Pay Bill", function()
    {
        loginpageObject.get(testdata.url);
        browser.driver.manage().window().maximize();
        loginpageObject.login(testdata.username,testdata.password);
        browser.sleep(7000);

        homepageObject.clickonViewAll_upcomingPayments();
        homepageObject.clickonPayfromOverlay();
        browser.sleep(1000);
        
        presentmentbillerObject.selectradiobutton('Other Amount','12121');
        //Enter remarks
        presentmentbillerObject.setRemarks("This is the transaction remark.");
        presentmentbillerObject.clickNextButton();
        browser.sleep(1000);
        presentmentbillerObject.setOTP('123123');
        presentmentbillerObject.clickConfirmButton();
        presentmentbillerObject.verifypaymentStatus('Success')

        
    })

});