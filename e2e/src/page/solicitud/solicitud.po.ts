import { by, element } from 'protractor';

export class SolicitudPage {
    private linksolicitudDropdown = element(by.id('solicitudDropdown'));
    private linkfuncionarioSolicitudDropdown = element(by.id('funcionarioSolicitudDropdown'));
    private linkListarSolicitud = element(by.id('linkListarSolicitud'));
    private linkRegistrarSolicitud = element(by.id('linkRegistrarSolicitudes'));
    private linkListarSolicitudByIdFuncionario = element(by.id('linkListSolicitudesByIdFuncionario'));
    private inputJustificacion = element(by.id('justificacion'));
    private linkButtonRegistrarSolicitud = element(by.id('buttonRegistrarSolicitud'));


    async clickBotonOpcionSolicitud() {
        await this.linksolicitudDropdown.click();
    }

    async clickBotonOpcionFunionarioSolicitud() {
        await this.linkfuncionarioSolicitudDropdown.click();
    }

    async clickBotonListarSolicitud() {
        await this.linkListarSolicitud.click();
    }

    async clickBotonListarSolicitudByIdFuncionario() {
        await this.linkListarSolicitudByIdFuncionario.click();
    }

    async clickBotonRegistrarSolicitud() {
        await this.linkRegistrarSolicitud.click();
    }

    async ingresarJustificacion(justificacion) {
        await this.inputJustificacion.sendKeys(justificacion);
    }

    async clickButtonRegistrarSolicitud() {
        await this.linkButtonRegistrarSolicitud.click();
    }

}
