[![Build Status](https://app.travis-ci.com/systelab/systelab-components-wdio-test.svg?branch=main)](https://app.travis-ci.com/systelab/systelab-components-wdio-test)
[![npm version](https://badge.fury.io/js/systelab-components-wdio-test.svg)](https://badge.fury.io/js/systelab-components-wdio-test)
[![Known Vulnerabilities](https://snyk.io/test/github/systelab/systelab-components-wdio-test/badge.svg?targetFile=package.json)](https://snyk.io/test/github/systelab/systelab-components-wdio-test?targetFile=package.json)

# systelab-wdio-test-validation
This repository includes the WebdriverIO test validation on the [SystelabComponents](https://systelab.github.io/components) using [WebDriverIO](https://https://webdriver.io/) test framework.

### Prerequisites
You need to install the systelab components wdio library
```bash
npm install systelab-components-wdio-test --save
```

### Clone
```bash
git clone https://github.com/systelab/systelab-components-wdio-test.git
cd systelab-components-wdio-test
```

## First steps:
To install all the dependencies type:
```bash
npm init to add a package.json
npm install
```

```bash
npm init wdio
```
And in order to create the WDIO Configuration file select the following options:
On my local machine
jasmine
TypeScript as a compiler
./app/wdio-validation/specs where the test specs would be
spec and allure reporter
chromedriver and edgedriver
set the https://systelab.github.io/components/ as base url

## Install edge driver
```bash
npm install wdio-edgedriver-service --save-dev
```

## Run Validation
To run webdriverio validation test, use the following command:

```bash
npm run wdio
```
or
```bash
cd app
npx wdio run wdio-validation/wdio.conf.js