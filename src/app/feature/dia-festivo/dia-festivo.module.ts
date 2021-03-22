import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RegistrarDiaFestivoComponent } from './componentes/registrar-dia-festivo/registrar-dia-festivo.component';
import { ListarDiaFestivoComponent } from './componentes/listar-dia-festivo/listar-dia-festivo.component';
import { DiaFestivoComponent } from './componentes/dia-festivo/dia-festivo.component';
import { DiaFestivoRoutingModule } from './dia-festivo-routing.module';
import { DiaFestivoService } from './shared/service/dia-festivo.service';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    RegistrarDiaFestivoComponent,
    ListarDiaFestivoComponent,
    DiaFestivoComponent,
  ],
  imports: [
    DiaFestivoRoutingModule,
    SharedModule
  ],
  providers: [DiaFestivoService,HttpClient]
})
export class DiaFestivoModule { }
