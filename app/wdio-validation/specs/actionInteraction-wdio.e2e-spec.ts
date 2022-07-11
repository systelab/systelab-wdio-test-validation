import { AssertionUtility, ReportUtility, TestIdentification } from 'systelab-components-wdio-test';
import { BrowserInteractionService } from '../services/browserInteraction-service';
import { NavigationBarPage } from '../pageObjects/navigationBarPage';
import { ShowCaseComponentsPage } from '../pageObjects/showCaseComponentsPage';
import { SystelabModalComponent } from '../pageObjects/systelabModalComponent';

describe('TC000X_WebdriverIO-Validation_Action_OnSelectors', () => {
  let browserService: BrowserInteractionService;
  let navigationBar: NavigationBarPage;
  let showCasePage: ShowCaseComponentsPage;
  let modalPage: SystelabModalComponent;
  let foundByID = 'found by Id';
  let empty = '';
  let attribute = 'placeholder';
  let attributeValue = 'Email';

  beforeEach(async () => {
    browserService = new BrowserInteractionService();
    navigationBar = new NavigationBarPage();
    showCasePage = new ShowCaseComponentsPage();
    modalPage = new SystelabModalComponent();

    TestIdentification.setTmsLink(
      'TC000X_WebdriverIO-Validation_Action_OnSelectors'
    );
    TestIdentification.setDescription(
      'Goal: The purpose of this test case is to verify the actions on elements'
    );
    await browserService.navigateToSystelabComponents();
  });

  it('WebdriverIO-Validation - Navigate to systelab components website, find an Input Field by Id, set a new value and get of the value', async () => {
    await showCasePage.waitToBeDisplayed();
    await ReportUtility.addExpectedResult(
      'The systelab components website is open and active',
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          'Systelab Components Library'
        );
      }
    );

    await showCasePage.getTextBoxById().setText(foundByID);
    await ReportUtility.addExpectedResult(
      'When setting a new value in the systelab component, it is found correctly by Id and set value are correct',
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxById().getText(),
          foundByID
        );
      }
    );
  });

  it('WebdriverIO-Validation - Navigate to systelab components website, find an Input Field by Id, set and clear a new value', async () => {
    await showCasePage.waitToBeDisplayed();
    await ReportUtility.addExpectedResult(
      'The systelab components website is open and active',
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          'Systelab Components Library'
        );
      }
    );
    await showCasePage.getTextBoxById().setText(foundByID);
    await ReportUtility.addExpectedResult(
      'When setting a new value in the systelab components website, it is found correctly by Id and set value are correct',
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxById().getText(),
          foundByID
        );
      }
    );
    await showCasePage.getTextBoxById().clear();
    await ReportUtility.addExpectedResult(
      'When setting a new value in the systelab component website, clear of the value are correct',
      async () => {
        AssertionUtility.expectEqual(
          await showCasePage.getTextBoxById().getText(),
          empty
        );
      }
    );
  });

  it('WebdriverIO-Validation - Navigate to systelab components website, find an Input Field by Id and click in button', async () => {
    await showCasePage.waitToBeDisplayed();
    await ReportUtility.addExpectedResult(
      'The systelab components website is open and active',
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          'Systelab Components Library'
        );
      }
    );
    await showCasePage.getIconQuestionButton().click();
    await modalPage.waitToBeDisplayed();
    await ReportUtility.addExpectedResult(
      'When setting a click on a button of the systelab component website, an expected modal window opens',
      async () => {
        AssertionUtility.expectTrue(await modalPage.isDisplayed());
      }
    );
  });

  it('WebdriverIO-Validation - Navigate to systelab components website, find an Input Field by Id and identifies an attribute from that field', async () => {
    await showCasePage.waitToBeDisplayed();
    await ReportUtility.addExpectedResult(
      'The systelab components website is open and active',
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          'Systelab Components Library'
        );
      }
    );
    await ReportUtility.addExpectedResult(
      'An attribute is identified on a button of the systelab component web site',
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
