import { expect, Page } from "@playwright/test";


export class LoginPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async LogIn(info) {
        /*informacion del usuario*/
        await this.page.locator('[data-test="username"]').fill(info.user);

        await this.page.locator('[data-test="password"]').fill(info.password);

        await this.page.locator('[data-test="login-button"]').click();
    
    }
    async isInventoryPage(){

        /**Valida que muestre la pagina de inventario */
        await expect(this.page.locator("#inventory_container.inventory_container")).toBeVisible();
    
      }
}