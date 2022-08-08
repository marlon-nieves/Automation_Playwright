import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../src/pages/SauceDemo/LoginPage';
import { AddToCardPage } from '../../../src/pages/SauceDemo/AddToCar';
import { CheckOnePage} from '../../../src/pages/SauceDemo/CheckOnePage';
import {CheckTwoPage } from '../../../src/pages/SauceDemo/CheckTwoPage';

test.beforeEach(async ({ page }) => {
    page.goto('https://www.saucedemo.com/');
});
/**Datos para hacer el login */
const info = {
    user: 'standard_user',
    password: 'secret_sauce'
};

/**Productos para agregar al carrito */
const products = [
    "Sauce Labs Onesie",
    "Sauce Labs Fleece Jacket",
    "Sauce Labs Bolt T-Shirt"
];

/**Datos para informacion del usuario*/
const information = {
    firstName: 'Marlon',
    lastName: 'Nieves',
    code: '5555'
};


test(`
Given the user was logged successfull
When the user add item to card
Then the user saw the item in the car`,

    async ({ page }) => {
        const loginPage = new LoginPage(page);
        const addToCardPage = new AddToCardPage(page);
        const checkPage = new CheckOnePage(page);
        const check2Page = new CheckTwoPage(page);

        await loginPage.LogIn(info);
        await addToCardPage.addProductToCar(products);
        await checkPage.infoUserData(information);
        await check2Page.finishBuy();
    });



