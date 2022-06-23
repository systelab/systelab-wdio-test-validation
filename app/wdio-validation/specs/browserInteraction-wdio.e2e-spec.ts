import { AssertionUtility, ReportUtility, TestIdentification } from 'systelab-components-wdio-test';
import { BrowserInteractionService } from '../services/browserInteraction-service';
import { NavigationBarPage } from '../pageObjects/navigationBarPage';
import { ShowCaseComponentsPage } from '../pageObjects/showCaseComponentsPage';

describe('TC000X_WebdriverIO-Validation_browser_Interaction', () => {
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

	it('WebdriverIO-Validation - Navigate to systelab components website', async () => {
		const iconsTabText: string = 'Icons';
		await navigationBar.waitToBeDisplayed();
		await navigationBar.getIcons().waitToBeClickable();
		await ReportUtility.addExpectedResult('The systelab components website is correctly open', async() => {
			AssertionUtility.expectEqual(await navigationBar.getIcons().getText(), iconsTabText);
		});
	});
});
