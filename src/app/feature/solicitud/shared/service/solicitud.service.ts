import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Solicitud } from '../model/solicitud';


@Injectable()
export class SolicitudService {


  constructor(protected http: HttpService) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(`${error.error.mensaje}`);
  }

  consultarByIdFuncionario(idFuncionario: number) {
    return this.http.doGet<Solicitud[]>(`${environment.endpoint}/solicitudes/${idFuncionario}`,
      this.http.optsName('Consultar solicitud por funcionario')).pipe(
        catchError(this.handleError)
      );
  }


  crearSolicitud(solicitud: Solicitud) {
    return this.http.doPost<Solicitud, boolean>(`${environment.endpoint}/solicitudes`, solicitud,
      this.http.optsName('Crear solicitud por funcionario')).pipe(
        catchError(this.handleError)
      );
  }

  listar(){
    return this.http.doGet<Solicitud[]>(`${environment.endpoint}/solicitudes/`,
    this.http.optsName('Consultar solicitud por funcionario')).pipe(
      catchError(this.handleError)
    );
  }

  resolverSolicitud(solicitud:Solicitud){
    return this.http.doPut<Solicitud,boolean>(`${environment.endpoint}/solicitudes`, solicitud,
    this.http.optsName('Crear solicitud por funcionario')).pipe(
      catchError(this.handleError)
    );
  }


}
