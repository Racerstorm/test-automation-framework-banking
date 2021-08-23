let homepage = function(){

    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);

     //Click on Upcoming payments view all button
    let upcomingpayments_viewAll = element(by.shadowDomCss("div.text-align-right.mt-1.mdl-cell--hide-phone > paper-button"));
    //Click on the first payment from the view all overlay
    let paybutton_from_overlay = element(by.shadowDomCss('ul > li:nth-child(1) > paper-button'));


    this.clickonViewAll_upcomingPayments = function()
    {
        upcomingpayments_viewAll.click();
    }

    this.clickonPayfromOverlay = function()
    {
        paybutton_from_overlay.click();
    }

};
module.exports = new homepage();