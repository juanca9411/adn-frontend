import { by, element } from 'protractor';

export class FuncionarioPage {
    private linkfuncionarioDropdown = element(by.id('funcionarioDropdown'));
    private linkAdministradorFuncionarioDropdown = element(by.id('administradorFuncionarioDropdown'));
    private linkDetalleFuncionario = element(by.id('linkDetalleFuncionario'));
    private linkListarFuncionario = element(by.id('linkListarFuncionario'));
    private linkRegistrarFuncionario = element(by.id('linkRegistrarFuncionario'));
    private linkfuncionarioOpcionAumentarSalarioDropdown = element(by.id('funcionarioOpcionAumentarSalarioDropdown'));
    private linkAumentarSalarioFuncionario = element(by.id('funcionarioAumentarSalario'));
    private linkButtonRegistrarFuncionario = element(by.id('buttonRegistrarFuncionario'));
    private inputNombre = element(by.id('nombre'));
    private inputFechaNacimiento = element(by.id('fechaNacimiento'));

    async clickBotonOpcionFuncionario() {
        await this.linkfuncionarioDropdown.click();
    }


    async clickBotonDetalleFuncionario() {
        await this.linkDetalleFuncionario.click();
    }

    async clickBotonfuncionarioOpcionAumentarSalarioDropdown() {
        await this.linkfuncionarioOpcionAumentarSalarioDropdown.click();
    }


    async clickBotonOpcionAdministradorFuncionario() {
        await this.linkAdministradorFuncionarioDropdown.click();
    }

    async clickBotonListarFuncionario() {
        await this.linkListarFuncionario.click();
    }

    async clickButtonRegistrarFuncionario() {
        await this.linkButtonRegistrarFuncionario.click();
    }


    async clickBotonRegistrarFuncionario() {
        await this.linkRegistrarFuncionario.click();
    }

    async clickBotonAumentarSalarioFuncionario() {

        await this.linkAumentarSalarioFuncionario.click();
    }

    async ingresarNombre(Nombre) {
        await this.inputNombre.sendKeys(Nombre);
    }

    async ingresarFechaNacimiento(fechaNacimiento) {
        await this.inputFechaNacimiento.sendKeys(fechaNacimiento);
    }

}
