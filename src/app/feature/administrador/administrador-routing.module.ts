import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarDiaFestivoComponent } from '../dia-festivo/componentes/listar-dia-festivo/listar-dia-festivo.component';
import { RegistrarDiaFestivoComponent } from '../dia-festivo/componentes/registrar-dia-festivo/registrar-dia-festivo.component';
import { ListarFuncionarioComponent } from '../funcionario/componentes/listar-funcionario/listar-funcionario.component';
import { RegistrarFuncionarioComponent } from '../funcionario/componentes/registrar-funcionario/registrar-funcionario.component';
import { ListarSolicitudComponent } from '../solicitud/componentes/listar-solicitud/listar-solicitud.component';
import { ResolverSolicitudComponent } from '../solicitud/componentes/resolver-solicitud/resolver-solicitud.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';


const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
      {
        path: 'listar-Funcionarios',
        component: ListarFuncionarioComponent
      },
      {
        path: 'registrar-funcionario',
        component: RegistrarFuncionarioComponent
      },
      {
        path: 'listar-solicitud',
        component: ListarSolicitudComponent
      },
      {
        path:'resolver-solicitud',
        component: ResolverSolicitudComponent
      },
      {
        path: 'listar-dia-festivo',
        component: ListarDiaFestivoComponent
      },
      {
        path:'registrar-dia-festivo',
        component: RegistrarDiaFestivoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
