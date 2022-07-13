import { AssertionUtility, ReportUtility, TestIdentification } from 'systelab-components-wdio-test';
import { BrowserInteractionService } from '../services/browserInteraction-service';
import { NavigationBarPage } from '../pageObjects/navigationBarPage';
import { ShowCaseComponentsPage } from '../pageObjects/showCaseComponentsPage';

describe("TC0003_WebdriverIO-Validation_Find_Wait_Selectors", () => {
  let browserService: BrowserInteractionService;
  let navigationBar: NavigationBarPage;
  let showCasePage: ShowCaseComponentsPage;

  let foundByID = "found by Id";
  let foundByClass = "found by ClassName";
  let foundByCss = "found by Css";
  let foundByTagName = "found by TagName";
  const modalsTab: number = 1;

  beforeEach(async () => {
    browserService = new BrowserInteractionService();
    navigationBar = new NavigationBarPage();
    showCasePage = new ShowCaseComponentsPage();
    ReportUtility.addLabel(
      "Browser",
      (browser.capabilities as any).browserName
    );
    ReportUtility.addLabel(
      "Browser Version",
      (browser.capabilities as any).browserVersion
    );
    ReportUtility.addLabel(
      "Test Execution Date Time",
      new Date().toLocaleString()
    );
    TestIdentification.setDescription(
      "Goal: The purpose of this test case is to verify that elements are found by selectors to be present,displayed,enabled and clickable"
    );
    await browserService.navigateToSystelabComponents();
  });

  it("TC0003-01-WebdriverIO-Validation - Navigate to Systelab Components and find an Input Field by Id to be displayed", async () => {
    await navigationBar.waitToBeDisplayed();
    await showCasePage.getTextBoxById().setText(foundByID);
    await showCasePage.getTextBoxById().waitToBeDisplayed();

    await ReportUtility.addExpectedResult(
      "The systelab component is correctly displayed found by Id",
      async () => {
        AssertionUtility.expectTrue(
          await showCasePage.getTextBoxById().isDisplayed()
        );
      }
    );
  });

  it("TC0003-02-WebdriverIO-Validation - Navigate to Systelab Components and find an Input Field by ClassName to be present", async () => {
    await navigationBar.waitToBeDisplayed();
    await showCasePage.getTextBoxByClassName().setText(foundByClass);
    await showCasePage.getTextBoxByClassName().waitToBePresent();

    await ReportUtility.addExpectedResult(
      "The systelab component found by ClassName is Present",
      async () => {
        AssertionUtility.expectTrue(
          await showCasePage.getTextBoxByClassName().isPresent()
        );
      }
    );
  });

  it("TC0003-03-WebdriverIO-Validation - Navigate to Systelab Components and find an Input Field by Css to be enabled", async () => {
    await navigationBar.waitToBeDisplayed();
    await showCasePage.getTextBoxByCss().setText(foundByCss);
    await showCasePage.getTextBoxByCss().waitToBeEnabled();

    await ReportUtility.addExpectedResult(
      "The systelab component found by Css is shown as Enabled",
      async () => {
        AssertionUtility.expectTrue(
          await showCasePage.getTextBoxByCss().isEnabled()
        );
      }
    );
  });

  it("TC0003-04-WebdriverIO-Validation - Navigate to Systelab Components and find an Input Field by TagName to be clickable", async () => {
    await navigationBar.waitToBeDisplayed();
    await showCasePage.getTextBoxByTagName().setText(foundByTagName);
    await showCasePage.getTextBoxByTagName().waitToBeClickable();

    await ReportUtility.addExpectedResult(
      "The systelab component found by TagName is shown as Clickable",
      async () => {
        AssertionUtility.expectTrue(
          await showCasePage.getTextBoxByTagName().isClickable()
        );
      }
    );
  });

  it("TC0003-05-WebdriverIO-Validation - Navigate to Systelab Components and find Label by Text", async () => {
    const fakeLabel = "fakeLabelText";
    const existLabel = "Chips";
    await navigationBar.waitToBeDisplayed();
    await showCasePage.getLabelByElementText(existLabel).waitToBeDisplayed();
    await showCasePage.getLabelByElementText(fakeLabel).waitToBeNotPresent();
    await ReportUtility.addExpectedResult(
      "The systelab component found by Label Text is shown as Present",
      async () => {
        AssertionUtility.expectTrue(
          await showCasePage.getLabelByElementText(existLabel).isPresent()
        );
      }
    );
    await ReportUtility.addExpectedResult(
      "The fake Label Text is not Present",
      async () => {
        AssertionUtility.expectFalse(
          await showCasePage.getLabelByElementText(fakeLabel).isPresent()
        );
      }
    );
  });

  it("TC0003-06-WebdriverIO-Validation - Navigate to Systelab Components and find Button by Text", async () => {
    const fakeButton = "fakeButtonText";
    const existButton = "Calendar";
    await navigationBar.waitToBeDisplayed();
    await browserService.openTabByNumber(modalsTab);
    await showCasePage.getButtonByText(existButton).waitToBeDisplayed();
    await showCasePage.getButtonByText(fakeButton).waitToBeNotPresent();
    await ReportUtility.addExpectedResult(
      "The systelab component found by Button Text is shown as Clickable",
      async () => {
        AssertionUtility.expectTrue(
          await showCasePage.getButtonByText(existButton).isClickable()
        );
      }
    );
    await ReportUtility.addExpectedResult(
      "The fake Button by Text is not Present",
      async () => {
        AssertionUtility.expectFalse(
          await showCasePage.getButtonByText(fakeButton).isPresent()
        );
      }
    );
  });

  it("TC0003-07-WebdriverIO-Validation - Navigate to Systelab Components and find a disabled Input Field", async () => {
    await navigationBar.waitToBeDisplayed();
    await showCasePage.getTextBoxDisabled().waitToBeNotClickable();
    await ReportUtility.addExpectedResult(
      "The systelab component is shown as Disabled (non Enabled)",
      async () => {
        AssertionUtility.expectFalse(
          await showCasePage.getTextBoxDisabled().isEnabled()
        );
      }
    );
  });

  it("TC0003-08-WebdriverIO-Validation - Navigate to Systelab Components and find all buttons by ClassName, TagName and CSS", async () => {
    const numberOfButtons: number = 26;
    await navigationBar.waitToBeDisplayed();
    await browserService.openTabByNumber(modalsTab);
    await ReportUtility.addExpectedResult(
      numberOfButtons + " buttons are found by TagName",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.countAllButtonsByTagname(),
          numberOfButtons
        );
      }
    );
    await ReportUtility.addExpectedResult(
      numberOfButtons + " buttons are found by ClassName",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.countAllButtonsByClassName(),
          numberOfButtons
        );
      }
    );
    await ReportUtility.addExpectedResult(
      numberOfButtons + " buttons are found by Css",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.countAllButtonsByCss(),
          numberOfButtons
        );
      }
    );
  });
});
