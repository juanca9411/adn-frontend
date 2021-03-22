import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolcitudComponent } from './componentes/solcitud/solcitud.component';
import { ListarSolicitudPorFuncionarioComponent } from './componentes/listar-solicitud-por-funcionario/listar-solicitud-por-funcionario.component';
import { RegistrarSolicitudComponent } from './componentes/registrar-solicitud/registrar-solicitud.component';
import { SolicitudService } from './shared/service/solicitud.service';
import { ListarSolicitudComponent } from './componentes/listar-solicitud/listar-solicitud.component';
import { ResolverSolicitudComponent } from './componentes/resolver-solicitud/resolver-solicitud.component';


@NgModule({
  declarations: [
    ListarSolicitudPorFuncionarioComponent,
    SolcitudComponent,
    RegistrarSolicitudComponent,
    ListarSolicitudComponent,
    ResolverSolicitudComponent
  ],
  imports: [
    SolicitudRoutingModule,
    SharedModule
  ],
  providers: [SolicitudService]
})
export class SolicitudModule { }
