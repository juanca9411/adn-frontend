import { NgModule } from '@angular/core';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './componentes/funcionario/funcionario.component';
import { SharedModule } from '@shared/shared.module';
import { ConsultarDetalleFuncionarioComponent } from './componentes/consultar-detalle-funcionario/consultar-detalle-funcionario.component';
import { ListarFuncionarioComponent } from './componentes/listar-funcionario/listar-funcionario.component';
import { RegistrarFuncionarioComponent } from './componentes/registrar-funcionario/registrar-funcionario.component';
import { FuncionarioService } from './shared/service/funcionario.service';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    ConsultarDetalleFuncionarioComponent,
    FuncionarioComponent,
    ListarFuncionarioComponent,
    RegistrarFuncionarioComponent
  ],
  imports: [
    FuncionarioRoutingModule,
    SharedModule
  ],
  providers: [FuncionarioService,HttpClient]
})
export class FuncionarioModule { }
