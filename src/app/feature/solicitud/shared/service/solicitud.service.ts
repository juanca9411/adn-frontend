import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Solicitud } from '../model/solicitud';


@Injectable()
export class SolicitudService {

  constructor(protected http: HttpClient) {}

  Url='http://localhost:8080/app/solicitudes';

  private handleError(error: HttpErrorResponse) {
    return throwError(`${error.error.mensaje}`);
  }

  consultarByIdFuncionario(idFuncionario:number){
    return this.http.get<Solicitud[]>(this.Url+"/"+idFuncionario).pipe(
      catchError(this.handleError)
    );
  }

  crearSolicitud(solicitud:Solicitud){
    return this.http.post<Solicitud>(this.Url,solicitud).pipe(
      catchError(this.handleError)
    );
  }

  listar(){
    return this.http.get<Solicitud[]>(this.Url).pipe(
      catchError(this.handleError)
    );
  }

  resolverSolicitud(solicitud:Solicitud){
    return this.http.put<Solicitud>(this.Url,solicitud).pipe(
      catchError(this.handleError)
    );
  }
 
}
