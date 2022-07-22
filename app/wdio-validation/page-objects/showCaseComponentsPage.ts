import { BasePage, InputField, Label, Button } from 'systelab-components-wdio-test';

export class ShowCaseComponentsPage extends BasePage {
  constructor() {
    super('showcase-components');
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

  public async countAllButtonsByTagname(): Promise<number> {
    return this.allByTagName('systelab-button').count();
  }

  public async countAllButtonsByClassName(): Promise<number> {
    return this.allByClassName('slab-btn').count();
  }

  public async countAllButtonsByCss(): Promise<number> {
    return this.allByCSS('.slab-btn').count();
  }
}
