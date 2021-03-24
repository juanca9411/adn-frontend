import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Funcionario } from '../../shared/model/funcionario';
import { FuncionarioService } from '../../shared/service/funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionario: Funcionario[];
  constructor(protected service: FuncionarioService, protected router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.listar()
      .subscribe(
        data => {
        this.funcionario = data;
      });
  }

  aumentarSalario(funcionario: Funcionario) {
    this.service.aumentarSalario(funcionario)
      .subscribe(
        () => {
            this.toastr.success('Peticion realizada con Exitos');
            window.location.reload();
        },
        error => {
          this.toastr.error(error);
          this.router.navigate(['./home/administrador/listar-Funcionarios']);
        });
  }

}
