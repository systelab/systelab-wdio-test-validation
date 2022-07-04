import { AssertionUtility, ReportUtility, TestIdentification } from 'systelab-components-wdio-test';
import { BrowserInteractionService } from '../services/browserInteraction-service';
import { NavigationBarPage } from '../pageObjects/navigationBarPage';
import { SystelabToastComponent } from '../pageObjects/systelabToastComponent'
import { environment } from '../utils/environment.dev';

fdescribe('TC000X_WebdriverIO-Validation_browser_Interaction', () => {
	let browserService: BrowserInteractionService;
	let navigationBar: NavigationBarPage;
	let toast: SystelabToastComponent;

	beforeEach(async () => {
		browserService = new BrowserInteractionService();
		navigationBar = new NavigationBarPage();
		toast = new SystelabToastComponent();
		TestIdentification.setTmsLink('TC000X_WebdriverIO-Validation_e2e');
		TestIdentification.setDescription('Goal: The purpose of this test case is to verify the ');
		await ReportUtility.addLabel('actualResults', 'new label inserted from e2e Test Execution... ');
		await browserService.navigateToSystelabComponents();
	});

	it('WebdriverIO-Validation - Navigate to systelab components website', async () => {
		const iconsTabText: string = 'Icons';
		await navigationBar.waitToBeDisplayed();
		await navigationBar.getIcons().waitToBeClickable();
		await ReportUtility.addExpectedResult('The systelab components website is correctly open', async() => {
			AssertionUtility.expectEqual(await navigationBar.getIcons().getText(), iconsTabText);
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and navigate to an specific tab', async () => {
		const navigationTab: number = 2;
		const iconsActive: string = 'active';
		await navigationBar.waitToBeDisplayed();
		await browserService.openTabByNumber(navigationTab);
		await ReportUtility.addExpectedResult('The systelab components tab is open and active', async() => {
			AssertionUtility.expectContains(await navigationBar.getNavTabAttributeByIndex(navigationTab, 'class'), iconsActive);
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components and open Systelab Components Github in a new window', async () => {
		await navigationBar.waitToBeDisplayed();
		await ReportUtility.addExpectedResult('The systelab components tab is open and active', async() => {
			AssertionUtility.expectContains(await browser.getTitle(), 'Systelab Components Library');
		});
		await browser.newWindow(environment.sytelabGitHub);
		await ReportUtility.addExpectedResult('The Systelab Components Github is open in a new window', async() => {
			AssertionUtility.expectContains(await browser.getTitle(), 'systelab/systelab-components · GitHub');
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components, open Systelab Github and switch back Systelab Components', async () => {
		await navigationBar.waitToBeDisplayed();
		await browser.newWindow(environment.sytelabGitHub)
		await browser.switchWindow(environment.systelabComponents);
		await ReportUtility.addExpectedResult('The systelab components tab is open again', async() => {
			AssertionUtility.expectContains(await browser.getTitle(), 'Systelab Components Library');
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components, press on toast and wait until is displayed and clickable', async () => {
		const modalsTab: number = 1;
		await navigationBar.waitToBeDisplayed();
		await browserService.openTabByNumber(modalsTab);
		await browserService.selectButtonByText('Success');
		await toast.waitToBeDisplayed();
		await ReportUtility.addExpectedResult('The systelab success toast button is selected and the toast is displayed', async() => {
			AssertionUtility.expectTrue(await toast.getSuccessToastIsDisplayed());
		});
	
		await toast.waitToBeClickable(5000);
		await ReportUtility.addExpectedResult('The systelab success toast is clickable', async() => {
			AssertionUtility.expectTrue(await toast.getSuccessToastIsClickable());;
		});
	});
});
