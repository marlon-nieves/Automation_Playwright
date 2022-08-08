import { test } from '@playwright/test';
import { SearchForAccommodationPage } from '../../../src/pages/Booking/SearchForAccommodationPage'
import { SearchPage } from '../../../src/pages/Booking/SearchPage';


/**Datos buscar el alojamiento*/
const infoTravel = {
    cityName: 'san andres',
    date: {
        check_in: "31 agosto 2022",
        check_out: "4 septiembre 2022",
        checkInMonthYear: "Agosto 2022",
        checkOutMonthYear: "Septiembre 2022"
    }

}

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.booking.com/index.es.html');

});

test(`
Given Necesito buscar un alojamiento
when lleno los campos
then visualizo los alojamientos disponibles
`, async ({ page }) => {

    const searchForAccommodationPage = new SearchForAccommodationPage(page);
    await searchForAccommodationPage.search(infoTravel);
    
    const search = new SearchPage(page);
    await search.accept();
});