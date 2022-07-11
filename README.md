# systelab-wdio-test-validation
This repository includes the WebdriverIO test validation on the [SystelabComponents][SystelabComponents]

### Prerequisites
You need to install [git][git], [Node.js][node] 10 and [npm][npm].

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

## Installing the systelab components wdio library
```bash
npm install systelab-components-wdio-test --save
```

### Clone
```bash
git clone https://github.com/systelab/systelab-components-wdio-test.git
cd systelab-components-wdio-test
```

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

[SytelabComponents]: https://systelab.github.io/components
[git]: https://git-scm.com/
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org