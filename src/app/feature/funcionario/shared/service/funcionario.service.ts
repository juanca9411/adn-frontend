import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../model/funcionario';


@Injectable()
export class FuncionarioService {

  constructor(protected http: HttpService) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(`${error.error.mensaje}`);
  }

  getDetalle(idFuncionario: number) {
    return this.http.doGet<Funcionario[]>(`${environment.endpoint}/funcionarios/${idFuncionario}`,
      this.http.optsName('Consultar detalle funcionario')).pipe(
        catchError(this.handleError)
      );
  }


  listar(){
    return this.http.doGet<Funcionario[]>(`${environment.endpoint}/funcionarios/`,
    this.http.optsName('Consultar funcionarios')).pipe(
      catchError(this.handleError)
    );
  }


  crear(funcionario:Funcionario){
    return this.http.doPost<Funcionario, boolean>(`${environment.endpoint}/funcionarios/`,funcionario,
    this.http.optsName('Crear funcionario')).pipe(
      catchError(this.handleError)
    );
  }

  aumentarSalario(funcionario:Funcionario){
    return this.http.doPut<Funcionario, boolean>(`${environment.endpoint}/funcionarios/aumentoSalario`,funcionario,
    this.http.optsName('Aumentar salario de funcionarios')).pipe(
      catchError(this.handleError)
    );
  }

}
