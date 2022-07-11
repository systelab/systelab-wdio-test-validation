import { AssertionUtility, ReportUtility, TestIdentification } from 'systelab-components-wdio-test';
import { BrowserInteractionService } from '../services/browserInteraction-service';
import { NavigationBarPage } from '../pageObjects/navigationBarPage';
import { ShowCaseComponentsPage } from '../pageObjects/showCaseComponentsPage';
import { SystelabModalComponent } from '../pageObjects/systelabModalComponent';


describe('TC000X_WebdriverIO-Validation_Action_OnSelectors', () => {
	let browserService: BrowserInteractionService;
	let navigationBar: NavigationBarPage;
	let showCasePage: ShowCaseComponentsPage;
	let modalPage: SystelabModalComponent;
	

	beforeEach(async () => {
		browserService = new BrowserInteractionService();
		navigationBar = new NavigationBarPage();
		showCasePage = new ShowCaseComponentsPage();
		modalPage = new SystelabModalComponent();
		
		TestIdentification.setTmsLink('TC000X_WebdriverIO-Validation_e2e');
		TestIdentification.setDescription('Goal: The purpose of this test case is to verify the actions on elements');
		await ReportUtility.addLabel('actualResults', 'new label inserted from e2e Test Execution... ');
		await browserService.navigateToSystelabComponents();
		
	});

	it('WebdriverIO-Validation - Navigate to systelab components website, find an Input Field by Id, set a new value and get of the value', async () => {
		await showCasePage.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By Id');
		await ReportUtility.addExpectedResult('When setting a new value in the systelab component, it is found correctly by Id and set value are correct', async() => {
			AssertionUtility.expectEqual(await showCasePage.getTextBoxById().getText(),"found By Id");
		});
	})
	
	it('WebdriverIO-Validation - Navigate to systelab components website, find an Input Field by Id, set and clear a new value', async () => {
		await showCasePage.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By Id');
		await showCasePage.getTextBoxById().clear();
		await ReportUtility.addExpectedResult('When setting a new value in the systelab component, it is found correctly by Id, set value and clear of the value are correct', async() => {
			AssertionUtility.expectEqual(await showCasePage.getTextBoxById().getText(),"");
		});
		
	})
	
	it('WebdriverIO-Validation - Navigate to systelab components website, find an Input Field by Id, set and clear a new value', async () => {
		await showCasePage.waitToBeDisplayed();
		await showCasePage.getButtonByCCS().click();
		await modalPage.waitToBeDisplayed();
		await ReportUtility.addExpectedResult('When setting a new value in the systelab component, it is found correctly by Id, set value and clear of the value are correct', async() => {
			AssertionUtility.expectTrue(await modalPage.isDisplayed());
		});
	})
	





});
