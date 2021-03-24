import { browser, by, element } from 'protractor';

export class DiaFestivoPage {
    private linkdiaFestivoDropdown = element(by.id('diaFestivoDropdown'));
    private linkRegistrarDiaFesvito = element(by.id('linkRegistrarDiaFestivo'));
    private linkListarDiaFestivo = element(by.id('linkListarDiaFestivo'));
    private botonAgregarDiaFestivo = element(by.id('agregarDiaFestivo'));
    private inputNombreDia = element(by.id('dia'));
    private inputFecha = element(by.id('fecha'));


    async clickBotonOpcionDiaFestivo() {
        await this.linkdiaFestivoDropdown.click();
    }

    async clickBotonRegistrarDiaFesvito() {
        await this.linkRegistrarDiaFesvito.click();
    }

    async clickBotonListarDiaFestivo() {
        await this.linkListarDiaFestivo.click();
    }

    async clickBotonAgregarDiaFestivo(){
        await this.botonAgregarDiaFestivo.click();
    }

    async ingresarDia(dia) {
        await this.inputNombreDia.sendKeys(dia);
    }

    async ingresarFecha(fecha) {
        await this.inputFecha.sendKeys(fecha);
    }
}
