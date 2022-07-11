# systelab-wdio-test-validation
This repository includes the WebdriverIO test validation on the https://systelab.github.io/components/

First steps:
To install all the dependencies type:
npm init to add a package.json
npm install

npm init wdio
And in order to create the WDIO Configuration file select the following options:
On my local machine
jasmine
TypeScript as a compiler
./app/wdio-validation/specs where the test specs would be
spec and allure reporter
chromedriver and edgedriver
set the https://systelab.github.io/components/ as bage url

Installing the library
npm install systelab-components-wdio-test --save

Install edge driver
npm install wdio-edgedriver-service --save-dev

Run Validation
To run webdriverio validation test, use the following command:

npm run wdio
or
cd app
npx wdio run wdio-validation/wdio.conf.js
