import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { DiaFestivoComponent } from './feature/dia-festivo/componentes/dia-festivo/dia-festivo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'home/funcionario/:idFuncionario', loadChildren: () => import('./feature/funcionario/funcionario.module').then(mod => mod.FuncionarioModule) },
  { path: 'home/solicitud/:idFuncionario', loadChildren: () => import('./feature/solicitud/solicitud.module').then(mod => mod.SolicitudModule) },
  { path: 'home/administrador', loadChildren: () => import('./feature/administrador/administrador.module').then(mod => mod.AdministradorModule) },
  {path:'dia-festivo',component:DiaFestivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
