# Description : 
Protractor based UI test automation framework using page object model. 

## Steps to run

1. Install [NodeJs](https://nodejs.org/en/download/)
2. Install and setup protractor by following the official [documentation](https://www.protractortest.org/#/)
3. Clone the repo from Git - https://github.com/Racerstorm/test-automation-framework-banking.git
4. Navigate to the cloned repo folder path in terminal/command prompt and run `npm init` (create package.json file with the default params).
5. Install the [query-selector-shadow-dom](https://www.npmjs.com/package/query-selector-shadow-dom) plugin to access the shadow dom elements.
    
    `npm i query-selector-shadow-dom`
6. Install the [protractor-beautiful-reporter](https://www.npmjs.com/package/protractor-beautiful-reporter) plugin(for reports)

    `npm i protractor-beautiful-reporter`
7.  Run `protractor conf/conf.js` to start the default test(s).
