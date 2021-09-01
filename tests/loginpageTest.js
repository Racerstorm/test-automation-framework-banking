let loginpageObject = require('../pages/loginpage');

var testdata = require('../testdata/Testdata_environment.json');

describe('Verify User is able to log in to the application', function(){

    it("Log in with username and password", function(){
    loginpageObject.get(testdata.url);
    browser.sleep(3000);
    loginpageObject.login(testdata.username,testdata.password);
    loginpageObject.verifyPageTitle(testdata.homepagetitle);
    browser.sleep(3000);
    
    })

});