import { BasePage, Tab, Tabs } from 'systelab-components-wdio-test';

export class NavigationBarPage extends BasePage {
    constructor() {
		super('systelab-navbar');
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

    public getStyles(): Tabs {
        return new Tabs(this.byId('nav-6'));
    }
}