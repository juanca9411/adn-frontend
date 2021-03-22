import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioComponent } from './componentes/funcionario/funcionario.component';
import { ConsultarDetalleFuncionarioComponent } from './componentes/consultar-detalle-funcionario/consultar-detalle-funcionario.component';
import { RegistrarSolicitudComponent } from '../solicitud/componentes/registrar-solicitud/registrar-solicitud.component';
import { ListarSolicitudPorFuncionarioComponent } from '../solicitud/componentes/listar-solicitud-por-funcionario/listar-solicitud-por-funcionario.component';



const routes: Routes = [
  {
    path: '',
    component: FuncionarioComponent,
    children: [
      {
        path: 'detalle/:idFuncionario',
        component: ConsultarDetalleFuncionarioComponent
      },
      {
        path: 'registrar-solicitud/:idFuncionario',
        component: RegistrarSolicitudComponent
      },
      {
        path: 'listar-solicitudes/:idFuncionario',
        component: ListarSolicitudPorFuncionarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
