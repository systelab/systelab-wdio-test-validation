import { BasePage } from 'systelab-components-wdio-test';

export class ShowCaseComponentsPage extends BasePage {
    constructor() {
		super('showcase-components');
    }
    public async getTextTitleByPosition(position: number): Promise<any>{
        return this.allByClassName('d-inline').get(position).getText();
    }
}