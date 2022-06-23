import { environment } from '../utils/environment.dev';
import { Browser } from 'systelab-components-wdio-test';
import { NavigationBarPage } from '../pageObjects/navigationBarPage';

export class BrowserInteractionService {
  navigationBar = new NavigationBarPage();

  public async navigateToSystelabComponents(): Promise<any> {
    return Browser.navigateToURL(environment.host) as Promise<any>;
  }

  /**
   * Wait until the navigation bar's styles button is clickable, then click it.
   * @returns The click() function is being returned.
   */
  public async openStylesTab(): Promise<void> {
    await this.navigationBar.getStyles().waitUntil(async function () {
			return (await this.click());
		});
  }
}
