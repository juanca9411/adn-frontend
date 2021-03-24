import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { by, element } from 'protractor';
import { SolicitudPage } from '../page/solicitud/solicitud.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let solicitud: SolicitudPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        solicitud = new SolicitudPage();
    });

    it('Deberia listar las solicitudes', () => {
        const NUMERO_SOLICITUD = '23';
        page.navigateTo("/home/administrador");
        solicitud.clickBotonOpcionSolicitud();
        solicitud.clickBotonListarSolicitud();

        expect(element(by.css('app-root #resultSolicitudnumSolicitud')).getText()).toEqual(NUMERO_SOLICITUD);
    });

    it('Deberia listar las solicitudes por el id del funcionario', () => {
        const NUMERO_SOLICITUD = '23';
        const ID_FUNCIONARIO = 9;

        page.navigateTo("/home/funcionario/" + ID_FUNCIONARIO);
        solicitud.clickBotonOpcionFunionarioSolicitud();
        solicitud.clickBotonListarSolicitudByIdFuncionario();

        expect(element(by.css('app-root #resultSolicitudnumSolicitud')).getText()).toEqual(NUMERO_SOLICITUD);
    });

    it('Deberia crear una solicitud', () => {
        const JUSTIFICACION = 'solicito un aumento de salario';
        const ID_FUNCIONARIO = 1;

        page.navigateTo("/home/funcionario/" + ID_FUNCIONARIO);
        solicitud.clickBotonOpcionFunionarioSolicitud();
        solicitud.clickBotonRegistrarSolicitud();
        solicitud.ingresarJustificacion(JUSTIFICACION);
        solicitud.clickButtonRegistrarSolicitud();

        expect(element(by.css('app-root #resultSolicitudEstado')).getText()).toEqual('Enviado')
            || expect(element(by.css('app-root #resultSolicitudEstado')).getText()).toEqual('Aprobado')
            || expect(element(by.css('app-root #resultSolicitudEstado')).getText()).toEqual('Rechazado');
    });

});
