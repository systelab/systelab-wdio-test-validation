[![Build Status](https://app.travis-ci.com/systelab/systelab-components-wdio-test.svg?branch=main)](https://app.travis-ci.com/systelab/systelab-components-wdio-test)
[![npm version](https://badge.fury.io/js/systelab-components-wdio-test.svg)](https://badge.fury.io/js/systelab-components-wdio-test)
[![Known Vulnerabilities](https://snyk.io/test/github/systelab/systelab-components-wdio-test/badge.svg?targetFile=package.json)](https://snyk.io/test/github/systelab/systelab-components-wdio-test?targetFile=package.json)

# systelab-wdio-test-validation
This repository includes the WebdriverIO test validation on the [SystelabComponents](https://systelab.github.io/components) using [WebDriverIO](https://https://webdriver.io/) test framework.

## Install webdriverIO:
To install all the dependencies type:
```bash
npm init wdio
```
On the Webdriverio installation steps select the following options in order to install the wdio packages:

- @wdio/local-runner
- @wdio/jasmine-framework
- @wdio/spec-reporter
- @wdio/allure-reporter
- wdio-chromedriver-service
- wdio-edgedriver-service
- chromedriver

Options to be selected:
- On my local machine
- Jasmine
- TypeScript as a compiler
- ./app/wdio-validation/specs where the test specs would be
- Spec and allure reporter
- Chromedriver and edgedriver services
- And select the npm install

### Install Systelab Components wdio library
You need to install the systelab components wdio library
```bash
npm install systelab-components-wdio-test --save
```

### Clone
```bash
git clone https://github.com/systelab/systelab-components-wdio-test.git
cd systelab-components-wdio-test
```

## Run Validation
To run webdriverio validation test, use the following command:

```bash
cd app
npx wdio run wdio-validation/wdio.conf.js
```

## Allure Results
```bash
cd wdio-validation
allure serve
automatically it would be open the allure reporter
```