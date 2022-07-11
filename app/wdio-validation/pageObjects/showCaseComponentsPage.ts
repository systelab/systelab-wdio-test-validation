import { BasePage, InputField, Label, Button } from 'systelab-components-wdio-test';

export class ShowCaseComponentsPage extends BasePage {
    constructor() {
		super('showcase-components');
    }
  
    public async getTextTitleByPosition(position: number): Promise<any>{
      return this.allByClassName('d-inline').get(position).getText();
    }
  
    public async selectTitleByPosition(position: number): Promise<void>{
      return (this.allByClassName('d-inline').get(position)).click();
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

    public getIconQuestionButton(): Button {
      return new Button(this.byCSS('.icon-question'));
    } 

    public getTextBoxDisabledById(): Button {
      return new Button(this.byId('disabled-input'));
    }

    public getTextBoxByTagName(): InputField {
      return new InputField(this.byTagName('input'));
    }
  
    public getLabelByElementText(text: string): Label {
      return new Label(this.byElementText('label', text));
    }
  
    public getButtonByText(text: string): Button {
      return new Button(this.byButtonText(text));
    }
  
    public getTextBoxDisabled(): InputField {
      return new InputField(this.byId('disabled-input'));
    }
  
    public async countAllButtonByTagname(): Promise<number> {
      return this.allByTagName('systelab-button').count();
    }
  
    public async getAllButtonByClassName(): Promise<any> {
      return this.allByClassName('slab-btn');
    }
  
    public async countAllButtonByClassName(): Promise<number> {
      return this.allByClassName('slab-btn').count();
    }
  
    public async getAllButtonByCss(): Promise<any> {
      return this.allByCSS('.slab-btn');
    }
  
    public async countAllButtonByCss(): Promise<number> {
      return this.allByCSS('.slab-btn').count();
    }
}
