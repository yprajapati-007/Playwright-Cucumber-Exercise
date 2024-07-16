import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { CheckoutPage } from "../pages/checkout.page";

Then("Select Checkout", async () => {
  await new CheckoutPage(await getPage()).checkout();
});

function generateRandomString(length: number): string {
  const regex = new RegExp(`[a-zA-Z0-9]{${length}}`);
  return Array.from({ length }, () => {
    const index = Math.floor(Math.random() * regex.source.length);
    return regex.source[index];
  }).join("");
}

Then("Fill in the First Name, Last Name, and Zip\\/Postal Code", async () => {
  const firstName = generateRandomString(6);
  const lastName = generateRandomString(8);
  const zipCode = generateRandomString(5);
  await new CheckoutPage(await getPage()).fillInformation(firstName, lastName, zipCode);
});

Then("Select Finish", async () => {
  await new CheckoutPage(await getPage()).finishCheckout();
});

Then("Validate the text as {string}", async (expectedText: string) => {
    const confirmation = await new CheckoutPage(await getPage()).validateOrderConfirmation();
    if (confirmation !== expectedText) {
        throw new Error(`Expected confirmation text to be '${expectedText}', but got '${confirmation}'`);
    }
});
