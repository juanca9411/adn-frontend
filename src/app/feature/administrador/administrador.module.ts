import { NgModule } from '@angular/core';

import { AdministradorRoutingModule} from './administrador-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AdministradorComponent } from './componentes/administrador/administrador.component';


@NgModule({
  declarations: [
    AdministradorComponent
  ],
  imports: [
    AdministradorRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class AdministradorModule { }
