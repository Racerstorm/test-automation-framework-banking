let commonUtilities = function(){


   this.waitForElement = function(typeofWait,element)
   {
     var EC = protractor.ExpectedConditions;
     var timeoutValue = 30000
     
     switch (typeofWait) {
        case 'alert':
          console.log('wait for alert');
          browser.wait(EC.alertIsPresent(), timeoutValue);
          break;

        case 'clickable':
          console.log('Waiting for element to be clickable');
          browser.wait(EC.elementToBeClickable(element), timeoutValue);
          break;

        case 'presence':
          console.log('Wating for element to be present');
          browser.wait(EC.presenceOf(element), timeoutValue);
          break;

          case 'visibility':
          console.log('Wating for element to be visible');
          browser.wait(EC.visibilityOf(element), timeoutValue);
          break;
        default:
          console.log("No value selected");
    }
    
   }

};
module.exports = new commonUtilities();