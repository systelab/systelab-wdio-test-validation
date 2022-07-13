import { AssertionUtility, ReportUtility, TestIdentification, DefaultTimeout, Browser } from 'systelab-components-wdio-test';
import { BrowserInteractionService } from '../services/browserInteraction-service';
import { ShowCaseComponentsPage } from '../pageObjects/showCaseComponentsPage';
import { SystelabModalComponent } from '../pageObjects/systelabModalComponent';

describe("TC0001_WebdriverIO-Validation_Action_OnSelectors", () => {
  let browserService: BrowserInteractionService;
  let showCasePage: ShowCaseComponentsPage;
  let modalPage: SystelabModalComponent;
  let systelabTitle = "Systelab Components Library";
  let foundByID = "found by Id";
  let empty = "";
  let attribute = "placeholder";
  let attributeValue = "Email";

  beforeEach(async () => {
    browserService = new BrowserInteractionService();
    showCasePage = new ShowCaseComponentsPage();
    modalPage = new SystelabModalComponent();
    ReportUtility.addLabel(
      "Browser",
      (browser.capabilities as any).browserName
    );
    ReportUtility.addLabel(
      "browserVersion",
      (browser.capabilities as any).browserVersion
    );
    ReportUtility.addLabel(
      "testExecutionDateTime",
      new Date().toLocaleString()
    );

    TestIdentification.setTmsLink(
      "TC0001_WebdriverIO-Validation_Action_OnSelectors"
    );
    TestIdentification.setDescription(
      "Goal: The purpose of this test case is to verify different actions are performed on elements of the Systelab Components website"
    );
    await browserService.navigateToSystelabComponents();
  });

  it("TC0001-01-WebdriverIO-Validation - Navigate to Systelab Components website, find an Input Field by Id, set a new value and get of the value", async () => {
    await showCasePage.waitToBeDisplayed();
    await ReportUtility.addExpectedResult(
      "The Systelab Components website is open and active",
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          systelabTitle
        );
      }
    );

    await showCasePage.getTextBoxById().setText(foundByID);
    await ReportUtility.addExpectedResult(
      "When setting a new value in the systelab component, it is found correctly by Id and set value are correct",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxById().getText(),
          foundByID
        );
      }
    );
  });

  it("TC0001-02-WebdriverIO-Validation - Navigate to Systelab Components website, find an Input Field by Id, set and clear a new value", async () => {
    await showCasePage.waitToBeDisplayed();
    await ReportUtility.addExpectedResult(
      "The Systelab Components website is open and active",
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          systelabTitle
        );
      }
    );
    await showCasePage.getTextBoxById().setText(foundByID);
    await ReportUtility.addExpectedResult(
      "When setting a new value in the Systelab Components website, it is found correctly by Id and set value are correct",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxById().getText(),
          foundByID
        );
      }
    );
    await showCasePage.getTextBoxById().clear();
    await ReportUtility.addExpectedResult(
      "When setting a new value in the systelab component website, clear of the value are correct",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxById().getText(),
          empty
        );
      }
    );
  });

  it("TC0001-03-WebdriverIO-Validation - Navigate to Systelab Components website, find an Input Field by Id and click in button", async () => {
    await showCasePage.waitToBeDisplayed();
    await ReportUtility.addExpectedResult(
      "The Systelab Components website is open and active",
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          systelabTitle
        );
      }
    );
    await showCasePage.getIconQuestionButton().click();
    await modalPage.waitToBeDisplayed(DefaultTimeout.SLOW_WAIT);
    await ReportUtility.addExpectedResult(
      "When setting a click on a button of the systelab component website, an expected modal window opens",
      async () => {
        AssertionUtility.expectTrue(await modalPage.isDisplayed());
      }
    );
  });

  it("TC0001-04-WebdriverIO-Validation - Navigate to Systelab Components website, find an Input Field by Id and identifies an attribute from that field", async () => {
    await showCasePage.waitToBeDisplayed();
    await ReportUtility.addExpectedResult(
      "The Systelab Components website is open and active",
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          systelabTitle
        );
      }
    );
    await ReportUtility.addExpectedResult(
      "An attribute is identified on a button of the systelab component web site",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage
            .getTextBoxDisabledById()
            .getElement()
            .getAttribute(attribute),
          attributeValue
        );
      }
    );
  });
});
