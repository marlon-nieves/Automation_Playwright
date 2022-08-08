import { Page, expect } from "@playwright/test";

export class SearchPage {

    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }


    async accept() {
        /*flitro para puntuacion 9 0 mas*/
        await this.page.waitForTimeout(2000);
        await this.page.locator("xpath=//div[@class = 'ffa9856b86 c9c3c66a7d f7d4209a37']//div[text() = 'Fantástico: 9 o más']").click();
        console.log("*********INFORMACION*************");


        /*xpath para tomar todos los precios*/
        const prices = await this.page.locator("xpath=(//div[@class='b5cd09854e d10a6220b4' and contains(text(),'9,')]/ancestor-or-self::div[@data-testid='property-card']//span[@class='fcab3ed991 bd73d13072'])").allInnerTexts();
        console.log("PRECIOS: " + prices);
        /* Removing the COP from the price. */
        const allPriceClean = prices.map((price) => {
            return price.trim().replace('COP ', ' ');

        });

        for (let y of allPriceClean) {

            console.log(y)

        }
        //xpath para tomar los cercanos a la playa
        const distance = await this.page.locator("xpath=(//span[contains(text(),' 50 m') or contains(text(),'100 m')or contains(text(),'150 m')or contains(text(),'200 m')or contains(text(),'250 m')or contains(text(),'300 m')or contains(text(),'350 m')or contains(text(),'400 m')or contains(text(),'450 m')or contains(text(),'500 m')])//ancestor-or-self::div[@class='d20f4628d0']//span[@class = 'fcab3ed991 bd73d13072']").allInnerTexts();
        console.log("DISTANCE: "+ ", " +distance);


        //xpath para tomar la valoracion superior a 9
        const valoration = await this.page.locator("xpath=//div[@class='b5cd09854e d10a6220b4' and contains(text(),'9,')]").allInnerTexts();
        console.log("VALORACION SUPERIOR A 9: " + valoration);

        //mapeo nombre del alojamineto
        //let name = await this.page.locator("xpath=(//div[@data-testid='title'])[2]").allInnerTexts();
        //console.log("name:------> "+ name);

        //mapeo menor distancia a la playa
        //let distance = await this.page.locator("xpath=(//span[@class = 'acb0d5ead1'])[2]").allInnerTexts();
        // console.log("distancia:-------> "+distance);

        //mapeo menor precio
        //let price = await this.page.locator("xpath=(//span[@class = 'fcab3ed991 bd73d13072'])[1]").allInnerTexts();
        //console.log("Precio:-------> "+price);
        
        /*xpath para tomar todos los prcios
        //div[@class='b5cd09854e d10a6220b4' and contains(text(),'9,')]/ancestor-or-self::div[@data-testid='property-card']//span[@class='fcab3ed991 bd73d13072']
        */
    }
}