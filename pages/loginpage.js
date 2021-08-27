let loginpage = function(){

    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);

   // let username=element(by.shadowDomCss('input[aria-labelledby="paper-input-label-7"]'));
    var username = element(by.css_sr('ev-login::sr #originalU::sr input'));
    let remember_me_checkbox = element(by.shadowDomCss('#checkboxContainer'));
    let nextbutton = element(by.shadowDomCss('#desktoploginModes'));
    let password=element(by.shadowDomCss('input[aria-labelledby="paper-input-label-8"]'));
    let confirmLoginButton=element(by.shadowDomCss('#btn_loginConfirm'));

    this.get=function(url) 
    {
        browser.get(url);  
        console.log(url);
    };

    this.setusername=function(username_value)
    {
        username.sendKeys(username_value);
    };

    this.selectcheckbox=function()
    {
        remember_me_checkbox.click();
    };

    this.clickNextButton=function()
    {
        nextbutton.click();
    };

    this.setpassword=function(password_value)
    {
        password.sendKeys(password_value);
    }

    this.clickConfirmButton=function()
    {
        confirmLoginButton.click();
        
    }

    this.login = function(username_value,password_value)
    {
        this.setusername(username_value);
        this.selectcheckbox();
        this.clickNextButton();
        browser.sleep(1000);
        this.setpassword(password_value);
        this.clickConfirmButton();
    }

    this.verifyPageTitle=function(pageTitle)
    {
        expect(browser.getTitle()).toEqual(pageTitle);
    }

};
module.exports = new loginpage();