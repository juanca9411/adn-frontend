import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductoModule } from '@producto/producto.module';

import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { FuncionarioModule } from './feature/funcionario/funcionario.module';
import { SolicitudModule } from './feature/solicitud/solicitud.module';
import { AdministradorModule } from './feature/administrador/administrador.module';
import { DiaFestivoModule } from './feature/dia-festivo/dia-festivo.module';
import { HomeModule } from '@home/home.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    FuncionarioModule,
    SolicitudModule,
    AdministradorModule,
    DiaFestivoModule,
    HomeModule,
    CoreModule,
	  BrowserAnimationsModule,
	  ToastrModule.forRoot()
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
