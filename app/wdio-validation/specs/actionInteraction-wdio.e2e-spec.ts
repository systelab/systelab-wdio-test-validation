import { AssertionUtility, ReportUtility, TestIdentification, DefaultTimeout } from "systelab-components-wdio-test";
import { BrowserInteractionService } from "../services/browserInteraction.service";
import { ExpectationService } from "../services/expectation.service";
import { ShowCaseComponentsPage } from "../page-objects/showCaseComponentsPage";
import { SystelabModalComponent } from "../page-objects/systelabModalComponent";

describe("TC0001_WebdriverIO-Validation_Action_OnSelectors", () => {
  let browserService: BrowserInteractionService;
  let expectation: ExpectationService;
  let showCasePage: ShowCaseComponentsPage;
  let systelabModal: SystelabModalComponent;

  const systelabTitle = "Systelab Components Library";
  const foundByID = "found by Id";
  const empty = "";
  const enabledTextBox = "enabled text box";
  const disabledTextBox = "disabled text box";

  beforeEach(async () => {
    browserService = new BrowserInteractionService();
    expectation = new ExpectationService();
    showCasePage = new ShowCaseComponentsPage();
    systelabModal = new SystelabModalComponent();
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

    TestIdentification.setTmsLink(
      "TC0001_WebdriverIO-Validation_Action_OnSelectors"
    );
    TestIdentification.setDescription(
      "Goal: The purpose of this test case is to verify different actions performed on" +
        "elements of the Systelab Components website on different browsers"
    );
    await browserService.navigateToSystelabComponents();
  });

  it("TC0001-01-WebdriverIO-Validation - Navigate to Systelab Components, find an Input Field, set and get a value", async () => {
    await showCasePage.waitToBeDisplayed();
    await expectation.expectWebsiteOpenAndActive(
      "The Systelab Components website is open and active",
      systelabTitle);

    await showCasePage.getTextBoxById().setText(foundByID);
    await ReportUtility.addExpectedResult(
      "When setting a new value in the systelab component Input Field the value is set correctly",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxById().getText(),
          foundByID
        );
      }
    );
  });

  it("TC0001-02-WebdriverIO-Validation - Navigate to Systelab Components website, find an Input Field, set and clear a value", async () => {
    await showCasePage.waitToBeDisplayed();
    await expectation.expectWebsiteOpenAndActive(
      "The Systelab Components website is open and active",
      systelabTitle);
    await showCasePage.getTextBoxById().setText(foundByID);
    await ReportUtility.addExpectedResult(
      "When setting a new value in the systelab component Input Field the value is set correctly",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxById().getText(),
          foundByID
        );
      }
    );
    await showCasePage.getTextBoxById().clear();
    await ReportUtility.addExpectedResult(
      "When clear the value in the systelab component Input Field the value is clear correctly",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxById().getText(),
          empty
        );
      }
    );
  });

  it("TC0001-03-WebdriverIO-Validation - Navigate to Systelab Components website and click in a button", async () => {
    await showCasePage.waitToBeDisplayed();
    await expectation.expectWebsiteOpenAndActive(
      "The Systelab Components website is open and active",
      systelabTitle);
    await showCasePage.getIconQuestionButton().click();
    await systelabModal.waitToBeDisplayed(DefaultTimeout.SLOW_WAIT);
    await ReportUtility.addExpectedResult(
      "When perform a click on a button of the systelab component website, an expected modal window is open",
      async () => {
        AssertionUtility.expectTrue(await systelabModal.isDisplayed());
      }
    );
  });

  it("TC0001-04-WebdriverIO-Validation - Navigate to Systelab Components, on disabled Input Field try to set a value", async () => {
    await showCasePage.waitToBeDisplayed();
    await expectation.expectWebsiteOpenAndActive(
      "The Systelab Components website is open and active",
      systelabTitle);
    await showCasePage.getTextBoxDisabled().setText(disabledTextBox);
    await showCasePage.getTextBoxById().setText(enabledTextBox);
    await ReportUtility.addExpectedResult(
      "On disabled input field is not been able to set value",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxDisabled().getText(),
          empty
        );
      }
    );
    await ReportUtility.addExpectedResult(
      "On enabled input field is been able to set value",
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxById().getText(),
          enabledTextBox
        );
      }
    );
  });
});
