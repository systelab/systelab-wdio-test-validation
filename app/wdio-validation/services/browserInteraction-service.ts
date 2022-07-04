import { environment } from '../utils/environment.dev';
import { Browser } from 'systelab-components-wdio-test';
import { NavigationBarPage } from '../pageObjects/navigationBarPage';

export class BrowserInteractionService {
  navigationBar = new NavigationBarPage();

  public async navigateToSystelabComponents(): Promise<any> {
    return Browser.navigateToURL(environment.systelabComponents) as Promise<any>;
  }

  /**
   * This function opens a tab by number.
   * @param {number} numberOfTab - number
   * @returns The promise is being returned.
   */
  public async openTabByNumber(numberOfTab: number): Promise<any> {
    return this.navigationBar.getNavTabs().selectTab(numberOfTab);
  }

  /**
   * For each button in the list of buttons, if the button's text is equal to the expected text, click the button.
   * @param {string} expectedText - string - The text of the button you want to click
   * @returns The return value is the result of the click() method.
   */
  public async selectButtonByText(expectedText: string): Promise<any> {
    for (const option of await $$('.slab-btn')) {
      if (await option.getText() === expectedText) {
        return option.click();
      }
    }
  }
}
