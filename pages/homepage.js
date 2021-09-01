const { waitForElement } = require("../utilities/commonUtilities");

let homepage = function(){


     //Click on Upcoming payments view all button
    let upcomingpayments_viewAll = element(by.shadowDomCss("div.text-align-right.mt-1.mdl-cell--hide-phone > paper-button"));
    //Click on the first payment from the view all overlay
    let paybutton_from_overlay = element(by.shadowDomCss('ul > li:nth-child(1) > paper-button'));




    this.clickonViewAll_upcomingPayments = function()
    {
        waitForElement('clickable',upcomingpayments_viewAll);
        upcomingpayments_viewAll.click();
    }

    this.clickonPayfromOverlay = function()
    {
        paybutton_from_overlay.click();
    }

    

};
module.exports = new homepage();