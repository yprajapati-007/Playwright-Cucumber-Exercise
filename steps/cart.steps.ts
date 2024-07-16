import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { CartPage } from '../pages/cart.page';

Then("Select the cart \\(top-right)", async () => {
  await new CartPage(await getPage()).openCart();
});
