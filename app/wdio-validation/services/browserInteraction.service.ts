import { environment } from '../utils/environment.dev';
import { Browser } from 'systelab-components-wdio-test';
import { NavigationBarPage } from '../page-objects/navigationBarPage';

export class BrowserInteractionService {
  navigationBar = new NavigationBarPage();

  public async navigateToSystelabComponents(): Promise<any> {
    return Browser.navigateToURL(
      environment.systelabComponents
    ) as Promise<any>;
  }

  /**
   * This function opens a tab by number.
   * @param {number} numberOfTab - number
   * @returns The promise is being returned.
   */
  public async openTabByNumber(numberOfTab: number): Promise<any> {
    return this.navigationBar.getNavTabs().selectTab(numberOfTab);
  }
}
