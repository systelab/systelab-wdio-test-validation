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

    public getFormComponents(): Tab {
        return new Tab(this.byId('nav-0'));
    }

    public getModals(): Tab {
        return new Tab(this.byId('nav-1'));
    }

    public getNavigation(): Tab {
        return new Tab(this.byId('nav-2'));
    }

    public getTables(): Tab {
        return new Tab(this.byId('nav-3'));
    }

    public getUtils(): Tab {
        return new Tab(this.byId('nav-4'));
    }

    public getIcons(): Tab {
        return new Tab(this.byId('nav-5'));
    }

    public getStyles(): Tab {
        return new Tab(this.byId('nav-6'));
    }
}