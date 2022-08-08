import { Page, expect } from '@playwright/test';

export class AddToCardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async addProductToCar(products) {
        //await this.page.locator('text=Name (A to Z)Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)').click();
        await this.page.locator('[data-test="product_sort_container"]').selectOption('lohi')

        /*añadiendo productos al carro de compras*/ 
        for(let product of products){
            await this.page.locator(`xpath=//a/div[text() = '${product}']//ancestor-or-self::div[@class = 'inventory_item']//button`).click();
        }

        // Click ShoppingCar
        await this.page.locator("xpath=//div[@id='shopping_cart_container']").click();
        //await this.page.locator('a:has-text("2")').click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');

        //await this.page.locator('a:has-text("2")').click();

        await this.page.goto('https://www.saucedemo.com/cart.html');
    }
}


