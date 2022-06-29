import { AssertionUtility, ReportUtility, TestIdentification } from 'systelab-components-wdio-test';
import { BrowserInteractionService } from '../services/browserInteraction-service';
import { NavigationBarPage } from '../pageObjects/navigationBarPage';
import { ShowCaseComponentsPage } from '../pageObjects/showCaseComponentsPage';


fdescribe('TC000X_WebdriverIO-Validation_Action_OnSelectors', () => {
	let browserService: BrowserInteractionService;
	let navigationBar: NavigationBarPage;
	let showCasePage: ShowCaseComponentsPage;
	

	beforeEach(async () => {
		browserService = new BrowserInteractionService();
		navigationBar = new NavigationBarPage();
		showCasePage = new ShowCaseComponentsPage();
		
		TestIdentification.setTmsLink('TC000X_WebdriverIO-Validation_e2e');
		TestIdentification.setDescription('Goal: The purpose of this test case is to verify the ');
		await ReportUtility.addLabel('actualResults', 'new label inserted from e2e Test Execution... ');
		await browserService.navigateToSystelabComponents();
		
	});

	fit('WebdriverIO-Validation - Navigate to systelab components website and find an Input Field by Id', async () => {
		await showCasePage.waitToBeDisplayed();
		await showCasePage.getTextBoxById().setText('found By Id');
		await ReportUtility.addExpectedResult('The systelab component is correctly found by Id', async() => {
			AssertionUtility.expectEqual(await showCasePage.getTextBoxById().getText(),"found By Id");
		});
	})
}); 
