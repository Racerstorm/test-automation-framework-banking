let presentmentbiller = function()
{
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);

    //Amount due radio button
    let amountdue_radio = element(by.shadowDomCss('paper-radio-group > paper-radio-button:nth-child(1)'));
    let minimumdue_radio = element(by.shadowDomCss('paper-radio-group > paper-radio-button:nth-child(2)'));
    let otheramount_radio = element(by.shadowDomCss('paper-radio-group > paper-radio-button:nth-child(3)'));
    let otheramount_inputfield = element(by.shadowDomCss('input[aria-labelledby="paper-input-label-32"]'));
    let remarksfield = element(by.shadowDomCss('input[aria-labelledby="paper-input-label-23"]'));
    //click next button to go to review 
    let nextbutton_detailspage = element(by.shadowDomCss('div.m-2.mx-desktop-0.pt-desktop-2 > paper-card > div.bottom-actions > paper-button'));
    let otpfield = element(by.shadowDomCss('input[name="PIN"]'));
    let confirmButton = element(by.shadowDomCss('div.m-2.mx-desktop-0.pt-desktop-2 > paper-card > div.bottom-actions > paper-button.primary-button.m-0'));
    let successMessage = element(by.shadowDomCss('#successHeading'));  


    this.selectradiobutton = function(radiobuttonvalue,otheramount_value)
    {
        switch (radiobuttonvalue) {
            case 'Amount Due':
              console.log('Amount Due');
              amountdue_radio.click();
              break;

            case 'Minimum Due':
              console.log('Minimum Due');
              minimumdue_radio.click();
              break;

            case 'Other Amount':
              console.log('Other Amount');
              otheramount_radio.click();
              //browser.sleep(1000);
              otheramount_inputfield.clear();
              otheramount_inputfield.sendKeys(otheramount_value);
              break;
            default:
              console.log("No value selected");
        }
    }

        this.setRemarks = function(remarks_value)
        {
            console.log("Set Remarks");
            remarksfield.sendKeys(remarks_value);
            
        }
        
        this.clickNextButton = function()
        {
            console.log("clickNextButton");
            nextbutton_detailspage.click();
        }

        this.setOTP = function(OTPValue)
        {

            otpfield.sendKeys(OTPValue);

        }

        this.clickConfirmButton = function()
        {
            confirmButton.click();
        }
        
        this.verifypaymentStatus = function(paymentStatus)
        {
            expect(successMessage.getText()).toEqual(paymentStatus);
        }
    
    
    };
module.exports = new presentmentbiller();