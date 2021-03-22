import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaFestivoComponent } from './componentes/dia-festivo/dia-festivo.component';



const routes: Routes = [
  {
    path: '',
    component: DiaFestivoComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaFestivoRoutingModule { }
