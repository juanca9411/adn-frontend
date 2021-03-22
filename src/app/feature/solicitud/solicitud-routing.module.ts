import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolcitudComponent } from './componentes/solcitud/solcitud.component';


const routes: Routes = [
  {
    path: '',
    component: SolcitudComponent,
   
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
