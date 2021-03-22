import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Funcionario } from '../model/funcionario';


@Injectable()
export class FuncionarioService {

  constructor(protected http: HttpClient) {}

  Url='http://localhost:8080/app/funcionarios';

  private handleError(error: HttpErrorResponse) {
    return throwError(`${error.error.mensaje}`);
  }

  getDetalle(idFuncionario:number){
    return this.http.get<Funcionario[]>(this.Url+"/"+idFuncionario).pipe(
      catchError(this.handleError)
    );
  }
 
  listar(){
    return this.http.get<Funcionario[]>(this.Url).pipe(
      catchError(this.handleError)
    );
  }

  crear(funcionario:Funcionario){
    return this.http.post<Funcionario>(this.Url,funcionario).pipe(
      catchError(this.handleError)
    );
  }

  aumentarSalario(funcionario:Funcionario){
    return this.http.put<Funcionario>(this.Url+'/aumentoSalario',funcionario).pipe(
      catchError(this.handleError)
    );
  }


}
