import {  HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DiaFestivo } from '../model/dia-festivo';


@Injectable()
export class DiaFestivoService {

  constructor(protected http: HttpService) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(`${error.error.mensaje}`);
  }

  public crear(diaFestivo: DiaFestivo) {
    return this.http.doPost<DiaFestivo, boolean>(`${environment.endpoint}/dias-festivos`, diaFestivo,
      this.http.optsName('agregar dias festivos')).pipe(
        catchError(this.handleError)
      );
  }

  public listar() {
    return this.http.doGet<DiaFestivo[]>(`${environment.endpoint}/dias-festivos`, this.http.optsName('consultar dias festivos')).pipe(
      catchError(this.handleError)
    );
  }

}
