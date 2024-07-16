import { Page } from "@playwright/test";

export class CartPage {
    private readonly page: Page;
    private readonly cartButton: string = '.shopping_cart_link';

    constructor(page: Page) {
        this.page = page;
    }

    public async openCart() {
        await this.page.click(this.cartButton);
    }
}
