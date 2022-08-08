import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../src/pages/SauceDemo/LoginPage';
import { AddToCardPage } from '../../../src/pages/SauceDemo/AddToCar';


test.beforeEach(async ({ page }) => {
    page.goto('https://www.saucedemo.com/');
});

/**
 * info para el usuario 
 */
const info = {
    user: 'standard_user',
    password: 'secret_sauce'
};

/**
 * productos añadidos al carrito de compras
 */
const products = [
    "Sauce Labs Onesie",
    "Sauce Labs Fleece Jacket"
];


test(`
Given the user is on the login page
When he/she enters the credentials
Then the/she login to the inventory page
And makes a product filter
And choose the lowest and highest priced product,`,

    async ({ page }) => {
        const loginPage = new LoginPage(page);
        const addToCardPage = new AddToCardPage(page);
       
        await loginPage.LogIn(info);
        await loginPage.isInventoryPage();
        await addToCardPage.addProductToCar(products);
        
    });



