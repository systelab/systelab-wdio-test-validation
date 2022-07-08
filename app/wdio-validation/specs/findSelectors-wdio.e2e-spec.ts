import { AssertionUtility, ReportUtility, TestIdentification } from 'systelab-components-wdio-test';
import { BrowserInteractionService } from '../services/browserInteraction-service';
import { NavigationBarPage } from '../pageObjects/navigationBarPage';
import { ShowCaseComponentsPage } from '../pageObjects/showCaseComponentsPage';

describe('TC000X_WebdriverIO-Validation_find_Selectors', () => {
	let browserService: BrowserInteractionService;
	let navigationBar: NavigationBarPage;
	let showCasePage: ShowCaseComponentsPage;

	beforeEach(async () => {
		browserService = new BrowserInteractionService();
		navigationBar = new NavigationBarPage();
		showCasePage = new ShowCaseComponentsPage();
		TestIdentification.setTmsLink('TC000X_WebdriverIO-Validation_e2e');
		TestIdentification.setDescription('Goal: The purpose of this test case is to verify that an element is found by many selectors');
		await browserService.navigateToSystelabComponents();
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find an Input Field by Id to be displayed', async () => {
		await navigationBar.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By Id');
		await ReportUtility.addExpectedResult('The systelab component is correctly displayed found by Id', async() => {
			AssertionUtility.expectTrue(await showCasePage.getTextBoxById().isDisplayed());
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find an Input Field by ClassName to be present', async () => {
		await navigationBar.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By ClassName');
		await ReportUtility.addExpectedResult('The systelab component found by ClassName is Present', async() => {
			AssertionUtility.expectTrue(await showCasePage.getTextBoxByClassName().isPresent());
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find an Input Field by Css to be enabled', async () => {
		await navigationBar.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By Css');
		await ReportUtility.addExpectedResult('The systelab component found by Css is shown as Enabled', async() => {
			AssertionUtility.expectTrue(await showCasePage.getTextBoxByCss().isEnabled());
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find an Input Field by TagName to be clickable', async () => {
		await navigationBar.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By TagName');
		await ReportUtility.addExpectedResult('The systelab component found by TagName is shown as Clickable', async() => {
			AssertionUtility.expectTrue(await showCasePage.getTextBoxByTagName().isClickable());
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find Label by Text', async () => {
		const fakeLabel = 'fakeLabelText';
		const existLabel = 'Chips';
		await navigationBar.waitToBeDisplayed();
		await showCasePage.getLabelByElementText(existLabel).waitToBeDisplayed();
		await showCasePage.getLabelByElementText(fakeLabel).waitToBeNotPresent();
		await ReportUtility.addExpectedResult('The systelab component found by Label Text is shown as Present', async() => {
			AssertionUtility.expectTrue(await showCasePage.getLabelByElementText(existLabel).isPresent());
		});
		await ReportUtility.addExpectedResult('The fake Label Text is not Present', async() => {
			AssertionUtility.expectFalse(await showCasePage.getLabelByElementText(fakeLabel).isPresent());
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find Button by Text', async () => {
		const modalsTab: number = 1;
		const fakeButton = 'fakeButtonText';
		const existButton = 'Calendar';
		await navigationBar.waitToBeDisplayed();
		await browserService.openTabByNumber(modalsTab);
		await showCasePage.getButtonByText(existButton).waitToBeDisplayed();
		await showCasePage.getButtonByText(fakeButton).waitToBeNotPresent();
		await ReportUtility.addExpectedResult('The systelab component found by Button Text is shown as Clickable', async() => {
			AssertionUtility.expectTrue(await showCasePage.getButtonByText(existButton).isClickable());
		});
		await ReportUtility.addExpectedResult('The fake Button by Text is not Present', async() => {
			AssertionUtility.expectFalse(await showCasePage.getLabelByElementText(fakeButton).isPresent());
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find Input Field Disabled', async () => {
		await navigationBar.waitToBeDisplayed();
		await showCasePage.getTextBoxDisabled().waitToBeNotClickable();
		await ReportUtility.addExpectedResult('The systelab component is shown as Disabled (non Enabled)', async() => {
			AssertionUtility.expectFalse(await showCasePage.getTextBoxDisabled().isEnabled());
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find all buttons by ClassName, TagName and CSS', async () => {
		const modalsTab: number = 1;
		const numberOfButtons: number = 26;
		await navigationBar.waitToBeDisplayed();
		await browserService.openTabByNumber(modalsTab);
		await ReportUtility.addExpectedResult(numberOfButtons + ' buttons are found by TagName', async() => {
			AssertionUtility.expectEqual(await showCasePage.countAllButtonByTagname(), numberOfButtons);;
		});
		await ReportUtility.addExpectedResult(numberOfButtons + ' buttons are found by ClassName', async() => {
			AssertionUtility.expectEqual(await showCasePage.countAllButtonByClassName(), numberOfButtons);
		});
		await ReportUtility.addExpectedResult(numberOfButtons + ' buttons are found by Css', async() => {
			AssertionUtility.expectEqual(await showCasePage.countAllButtonByCss(), numberOfButtons);
		});
	});
});
