import { Widget, Browser } from 'systelab-components-wdio-test';

export class SystelabModalComponent extends Widget {
  constructor() {
    super(Browser.byClassName('cdk-overlay-pane'));
  }
}
