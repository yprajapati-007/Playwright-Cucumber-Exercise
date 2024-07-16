import { Then, When } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Product } from "../pages/product.page";

When("I will add the backpack to the cart", async () => {
  await new Product(getPage()).addBackPackToCart();
});

When("Sort the items by {string}", async (sortOption: string) => {
  await new Product(getPage()).sortItemsBy(sortOption);
});

Then(
  "Validate all 6 items are sorted correctly by price {string}",
  async (sortOrder: string) => {
    await new Product(getPage()).validateSortedItemsByPrice(sortOrder);
  }
);
