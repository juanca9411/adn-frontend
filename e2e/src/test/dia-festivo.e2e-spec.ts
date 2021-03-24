import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { DiaFestivoPage } from '../page/dia-festivo/dia-festivo.po';
import { browser, by, element } from 'protractor';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let diaFestivo: DiaFestivoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        diaFestivo = new DiaFestivoPage();
    });

   it('Deberia listar los dias festivos', () => {
        const DIA = 'Domingo de Ramos';
        page.navigateTo("/home/administrador");
        diaFestivo.clickBotonOpcionDiaFestivo();
        diaFestivo.clickBotonListarDiaFestivo();

        expect(element(by.css('app-root #resultDia')).getText()).toEqual(DIA);
    });

    it('Deberia agregar un dia festivo', () => {
        const DIA = 'Dia de la paz';
        const FECHA = "24/03/2021";

        page.navigateTo("/home/administrador/registrar-dia-festivo");
        diaFestivo.clickBotonOpcionDiaFestivo(); 
        browser.sleep(1000)
        diaFestivo.clickBotonRegistrarDiaFesvito();
        browser.sleep(1000)
        diaFestivo.ingresarDia(DIA);
        browser.sleep(2000)
        diaFestivo.ingresarFecha(FECHA);
        browser.sleep(5000)
        diaFestivo.clickBotonAgregarDiaFestivo();
        browser.sleep(1000)
    });

});
