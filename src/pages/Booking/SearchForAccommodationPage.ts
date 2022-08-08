import { Page, expect } from "@playwright/test";

export class SearchForAccommodationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async search(infoTravel) {
        /*Click en el campos de  buscar ciudad*/
        await this.page.locator('xpath=//*[@id="frm"]/div[1]/div[1]/div[1]/div[1]/label').click();

        /*ingresa la ciudad en el campo */
        await this.page.locator('xpath=//*[@id="ss"]').fill(infoTravel.cityName);

        /*espera y seleciona la ciudad*/
        await this.page.waitForTimeout(3000);
        await this.page.locator('xpath=//*[@id="frm"]/div[1]/div[1]/div[1]/div[1]/ul[1]/li[1]/span[2]').click();


        /**Fecha Ingreso */
        await this.setDate(infoTravel.date);
        
    }

    async setDate(date) {
        /*Clic seccion Next para sobreponer los calendarios y poder ingresar la fecha*/
        await this.page.locator("xpath=//*[@id='frm']/div[1]/div[2]/div[2]/div/div/div[2]").click();
        await this.page.waitForTimeout(3000);

        /*fecha ingreso y fecha salida*/
        await this.page.locator(`xpath=//td[@class = 'bui-calendar__date']//span[@aria-label = '${date.check_in}']`).click();
        await this.page.waitForTimeout(4000);
        await this.page.locator(`xpath=//td[@class = 'bui-calendar__date']//span[@aria-label = '${date.check_out}']`).click();

        /*cantidad de personas y habitaciones*/
        await this.page.locator("xpath=//div[@data-visible='accommodation,flights']").click();
        await this.page.waitForTimeout(3000);
        await this.page.locator("xpath=//button[@aria-label='Aumenta el número de Habitaciones']").click();

        /*Click button buscar*/
        await this.page.locator("xpath=//div[@class = 'sb-searchbox-submit-col -submit-button ']").click();
        await this.page.waitForTimeout(4000);
    }
}