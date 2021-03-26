import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from '../../shared/model/funcionario';
import { FuncionarioService } from '../../shared/service/funcionario.service';

@Component({
  selector: 'app-consultar-detalle-funcionario',
  templateUrl: './consultar-detalle-funcionario.component.html',
  styleUrls: ['./consultar-detalle-funcionario.component.css']
})
export class ConsultarDetalleFuncionarioComponent implements OnInit {
  funcionario: Funcionario[];
  idFuncionario: number;

  constructor(protected service: FuncionarioService, private activaRouter: ActivatedRoute, private toastr: ToastrService) {
  }

  ngOnInit(): void {

    this.getDetalleFuncionario();

  }

  private getDetalleFuncionario() {
    this.idFuncionario = +this.activaRouter.snapshot.paramMap.get('idFuncionario');
    this.service.getDetalle(this.idFuncionario)
      .subscribe(
        data => {
          this.funcionario = data;
        },
        error => {
          this.toastr.error(error);
        });
  }



}
