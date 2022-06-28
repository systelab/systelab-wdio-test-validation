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
		TestIdentification.setDescription('Goal: The purpose of this test case is to verify that an element is found by many selectors ');
		await browserService.navigateToSystelabComponents();
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find an Input Field by Id', async () => {
		await navigationBar.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By Id');
		await ReportUtility.addExpectedResult('The systelab component is correctly found by Id', async() => {
			AssertionUtility.expectTrue(await showCasePage.getTextBoxById().isDisplayed());
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find an Input Field by ClassName', async () => {
		await navigationBar.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By ClassName');
		await ReportUtility.addExpectedResult('The systelab component is correctly found by ClassName', async() => {
			AssertionUtility.expectTrue(await showCasePage.getTextBoxByClassName().isDisplayed());
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find an Input Field by Css', async () => {
		await navigationBar.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By Css');
		await ReportUtility.addExpectedResult('The systelab component is correctly found by Css', async() => {
			AssertionUtility.expectTrue(await showCasePage.getTextBoxByCss().isDisplayed());
		});
	});

	it('WebdriverIO-Validation - Navigate to systelab components website and find an Input Field by TagName', async () => {
		await navigationBar.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By TagName');
		await ReportUtility.addExpectedResult('The systelab component is correctly found by Tagname', async() => {
			AssertionUtility.expectTrue(await showCasePage.getTextBoxByTagName().isDisplayed());
		});
	});
});
