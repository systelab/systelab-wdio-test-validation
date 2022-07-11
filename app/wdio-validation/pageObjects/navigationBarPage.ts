import { BasePage, Tab, Tabs, ElementFinder } from 'systelab-components-wdio-test';

export class NavigationBarPage extends BasePage {
    constructor() {
		super('systelab-navbar');
    }

    public getNavTabs(): Tabs {
        return new Tabs(this.byClassName('slab-navbar-elements'));
    }

    public async getNavTabAttributeByIndex(index: number, attribute: string): Promise<string> {
        return this.getNavTabs().
        allByTagName('li').
        get(index).
        getAttribute(attribute);
    }

    public getIcons(): Tab {
        return new Tab(this.byId('nav-5'));
    }
}
