let loginpageObject = require('../pages/loginpage');

var testdata = require('../testdata/testdata.json');

describe('Login to the application', function(){

    it("Log in", function(){
    loginpageObject.get(testdata.url);
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
    // browser.waitForAngularEnabled(false);
    browser.sleep(3000);
    loginpageObject.login(testdata.username,testdata.password);
    loginpageObject.verifyPageTitle(testdata.homepagetitle);
    browser.sleep(3000);
    
    })



});