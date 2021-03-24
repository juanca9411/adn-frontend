import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { browser, by, element } from 'protractor';
import { FuncionarioPage } from '../page/funcionario/funcionario.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let funcionario: FuncionarioPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        funcionario = new FuncionarioPage();
    });

   it('Deberia mostrar el detalle de un funcionario', () => {
        const NUMERO_CEDULA = '1050965338';
        const ID_FUNCIONARIO = 1;
        page.navigateTo("/home/funcionario/"+ID_FUNCIONARIO);
        funcionario.clickBotonOpcionFuncionario();
        funcionario.clickBotonDetalleFuncionario();

        expect(element(by.css('app-root #funcionarioCedula')).getText()).toEqual(NUMERO_CEDULA);
    });


    it('Deberia listar los funcionarios', () => {
        const NUMERO_CEDULA = '1050965338';
        page.navigateTo("/home/administrador/");
        funcionario.clickBotonOpcionAdministradorFuncionario();
        funcionario.clickBotonListarFuncionario();

        expect(element(by.css('app-root #funcionarioCedula')).getText()).toEqual(NUMERO_CEDULA);
    });


    it('Deberia aumentar el salario del funcionario', () => {
        page.navigateTo("/home/administrador/");
        funcionario.clickBotonOpcionAdministradorFuncionario();
        funcionario.clickBotonListarFuncionario();
        
        const SALARIO_NEW=element(by.css('app-root #funcionarioSalario')).getText();
        funcionario.clickBotonfuncionarioOpcionAumentarSalarioDropdown();
        funcionario.clickBotonAumentarSalarioFuncionario();
        funcionario.clickBotonListarFuncionario();
        expect(element(by.css('app-root #funcionarioSalario')).getText()).not.toEqual(SALARIO_NEW);
    });


    it('Deberia registrar un funcionario', () => {
        const NOMBRE = 'Juan Camilo';
        const FECHA_NACIMIENTO = "1994-05-11";

        page.navigateTo("/home/administrador/registrar-funcionario");
        funcionario.clickBotonOpcionAdministradorFuncionario();
        browser.sleep(1000)
        funcionario.clickBotonRegistrarFuncionario();
        browser.sleep(1000)
        funcionario.ingresarNombre(NOMBRE);
        browser.sleep(1000)
        funcionario.ingresarFechaNacimiento(FECHA_NACIMIENTO);
        funcionario.clickButtonRegistrarFuncionario();
        browser.sleep(1000)
        
    });

});
