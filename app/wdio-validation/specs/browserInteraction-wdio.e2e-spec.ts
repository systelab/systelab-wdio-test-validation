import { AssertionUtility, ReportUtility, TestIdentification } from 'systelab-components-wdio-test';
import { BrowserInteractionService } from '../services/browserInteraction-service';
import { NavigationBarPage } from '../pageObjects/navigationBarPage';
import { environment } from '../utils/environment.dev';

describe('TC0002_WebdriverIO-Validation_Browser_Interaction', () => {
  let browserService: BrowserInteractionService;
  let navigationBar: NavigationBarPage;
  let systelabTitle = 'Systelab Components Library';
  let systelabGitHubTitle = 'systelab/systelab-components · GitHub';

  beforeEach(async () => {
    browserService = new BrowserInteractionService();
    navigationBar = new NavigationBarPage();
    TestIdentification.setTmsLink('TC0002_WebdriverIO-Validation_browser_Interaction');
    TestIdentification.setDescription(
      'Goal: The purpose of this test case is to verify the browser interaction navigation '
    );
    await browserService.navigateToSystelabComponents();
  });

  it('TC0002-01-WebdriverIO-Validation - Navigate to Systelab Components website', async () => {
    const iconsTabText: string = 'Icons';
    await navigationBar.waitToBeDisplayed();
    await navigationBar.getIcons().waitToBeClickable();
    await ReportUtility.addExpectedResult(
      'The Systelab Components website is correctly open',
      async () => {
        AssertionUtility.expectEqual(
          await navigationBar.getIcons().getText(),
          iconsTabText
        );
      }
    );
  });

  it('TC0002-02-WebdriverIO-Validation - Navigate to Systelab Components website and navigate to an specific tab', async () => {
    const navigationTab: number = 2;
    const iconsActive: string = 'active';
    await navigationBar.waitToBeDisplayed();
    await browserService.openTabByNumber(navigationTab);
    await ReportUtility.addExpectedResult(
      'The Systelab Components tab is open and active',
      async () => {
        AssertionUtility.expectContains(
          await navigationBar.getNavTabAttributeByIndex(navigationTab, 'class'),
          iconsActive
        );
      }
    );
  });

  it('TC0002-03-WebdriverIO-Validation - Navigate to Systelab Components and open Systelab Components Github in a new window', async () => {
    await navigationBar.waitToBeDisplayed();
    await ReportUtility.addExpectedResult(
      'The Systelab Components tab is open and active',
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          systelabTitle
        );
      }
    );
    await browser.newWindow(environment.sytelabGitHub);
    await ReportUtility.addExpectedResult(
      'The Systelab Components Github is open in a new window',
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          systelabGitHubTitle
        );
      }
    );
  });

  it('TC0002-04-WebdriverIO-Validation - Navigate to Systelab Components, open Systelab Github and switch back', async () => {
    await navigationBar.waitToBeDisplayed();
    await browser.newWindow(environment.sytelabGitHub);
    await browser.switchWindow(environment.systelabComponents);
    await ReportUtility.addExpectedResult(
      'The Systelab Components tab is open again',
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          systelabTitle
        );
      }
    );
  });
});
