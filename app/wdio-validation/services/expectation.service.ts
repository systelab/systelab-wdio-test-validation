import { AssertionUtility, ReportUtility } from "systelab-components-wdio-test";

export class ExpectationService {

  public async expectWebsiteOpenAndActive(verificationText: string, expectedText: string): Promise<any> {
    await ReportUtility.addExpectedResult(
      verificationText,
      async () => {
        AssertionUtility.expectContains(
          await browser.getTitle(),
          expectedText
        );
      }
    );
  }
}
