var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: 
            {
                 args: ['start-maximized']
            }   
        }, 
    plugins: [{
        package: 'query-selector-shadow-dom/plugins/protractor'
    }],
    specs: ['../tests/presentmentbiller_test.js'],

    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
                baseDirectory: 'Reports',
                screenshotsSubfolder: 'screenshots'
                //jsonsSubfolder: 'jsonFiles'
             }).getJasmine2Reporter());
             browser.ignoreSynchronization = true;
             browser.waitForAngularEnabled(false);
             browser.driver.manage().window().maximize();
             browser.manage().timeouts().implicitlyWait(30000);
             require('../utilities/FindLocator').findShadowDomLocator();
             require('../utilities/commonUtilities').waitForElement();
          },
          jasmineNodeOpts: {
            showColors: true,
            includeStackTrace: true,
            defaultTimeoutInterval: 1440000
           }
    };