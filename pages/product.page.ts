import { Page } from "@playwright/test";

export class Product {
  private readonly page: Page;
  private readonly backpackButton: string =
    'button[data-test="add-to-cart-sauce-labs-backpack"]';
  private readonly sortDropdown: string = ".product_sort_container";
  private readonly itemPrices: string = ".inventory_item_price";

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart() {
    await this.page.locator(this.backpackButton).click();
  }

  public async sortItemsBy(option: string) {
    await this.page.selectOption(this.sortDropdown, { label: option });
  }

  public async validateSortedItemsByPrice(order: string) {
    const prices = await this.page.$$eval(this.itemPrices, (items) =>
      items
        .map((item) => item.textContent)
        .filter((text) => text !== null)
        .map((text) => parseFloat(text!.replace("$", "")))
    );

    let sortedPrices = [...prices];
    if (order === "Price (low to high)") {
      sortedPrices.sort((a, b) => a - b);
    } else if (order === "Price (high to low)") {
      sortedPrices.sort((a, b) => b - a);
    }

    if (JSON.stringify(prices) !== JSON.stringify(sortedPrices)) {
      throw new Error(`Items are not sorted correctly by ${order}`);
    }
  }
}
