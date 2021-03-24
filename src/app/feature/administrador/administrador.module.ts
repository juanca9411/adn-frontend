import { NgModule } from '@angular/core';

import { AdministradorRoutingModule} from './administrador-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { ManejadorError } from '@core/interceptor/manejador-error';


@NgModule({
  declarations: [
    AdministradorComponent
  ],
  imports: [
    AdministradorRoutingModule,
    SharedModule,
  ],
  providers: [ManejadorError]
})
export class AdministradorModule { }
