import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DiaFestivo } from '../model/dia-festivo';


@Injectable()
export class DiaFestivoService {

  constructor(protected http: HttpClient) {}

  Url='http://localhost:8080/app/dias-festivos';

  private handleError(error: HttpErrorResponse) {
    return throwError(`${error.error.mensaje}`);
  }

  crear(diaFestivo:DiaFestivo){
    return this.http.post<DiaFestivo>(this.Url,diaFestivo).pipe(
      catchError(this.handleError)
    );
  }

  listar(){
    return this.http.get<DiaFestivo[]>(this.Url).pipe(
      catchError(this.handleError)
    );
  }
 
}
