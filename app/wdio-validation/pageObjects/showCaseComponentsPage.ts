import { BasePage, InputField } from 'systelab-components-wdio-test';

export class ShowCaseComponentsPage extends BasePage {
    constructor() {
		super('showcase-components');
    }
  
    public async getTextTitleByPosition(position: number): Promise<any>{
      return this.allByClassName('d-inline').get(position).getText();
    }

    public getTextBoxByClassName(): InputField {
      return new InputField(this.byClassName('form-control'));
    }
  
    public getTextBoxByCss(): InputField {
      return new InputField(this.byCSS('.form-control'));
    }
  
    public getTextBoxById(): InputField {
      return new InputField(this.byId('full-width-input'));
    }
  
    public getTextBoxByTagName(): InputField {
      return new InputField(this.byTagName('input'));
    }
}
