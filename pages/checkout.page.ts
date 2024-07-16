import { Page } from "@playwright/test";

export class CheckoutPage {
  private readonly page: Page;
  private readonly checkoutButton: string = "#checkout";
  private readonly firstNameInput: string = "#first-name";
  private readonly lastNameInput: string = "#last-name";
  private readonly postalCodeInput: string = "#postal-code";
  private readonly continueButton: string = "#continue";
  private readonly finishButton: string = "#finish";
  private readonly confirmationText: string = ".complete-header";

  constructor(page: Page) {
    this.page = page;
  }

  public async checkout() {
    await this.page.click(this.checkoutButton);
  }

  public async fillInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  public async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  public async validateOrderConfirmation(): Promise<string> {
    await this.page.waitForSelector(this.confirmationText);
    const text = await this.page.textContent(this.confirmationText);
    if (text === null) {
      throw new Error("Order confirmation text is null");
    }
    return text;
  }
}
