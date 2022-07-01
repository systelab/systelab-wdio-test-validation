import { Widget, MessagePopup, Browser } from 'systelab-components-wdio-test';

export class SystelabToastComponent extends Widget {
    constructor() {
		super(Browser.byTagName('systelab-toast'));
    }

    public async getSuccessToastIsDisplayed(): Promise<boolean> {
      return (this.byClassName('slab-toast--success')).isDisplayed();
    }
  
    public async getSuccessToastIsClickable(): Promise<boolean> {
      return (this.byClassName('slab-toast--success')).isClickable();
    }
}
