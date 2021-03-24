import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { FuncionarioService } from '../../shared/service/funcionario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-funcionario',
  templateUrl: './registrar-funcionario.component.html',
  styleUrls: ['./registrar-funcionario.component.css']
})
export class RegistrarFuncionarioComponent implements OnInit {

  funcionarioForm: FormGroup;

  constructor(private service: FuncionarioService, private router: Router, private core:CoreModule,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.construirFormularioFuncionario();
  }


  registrar() {
   
    let fechaNacimiento:string=this.funcionarioForm.value.fechaNacimiento;
    let fechaIngreso:string=this.funcionarioForm.value.fechaIngreso;
    this.funcionarioForm.patchValue({fechaNacimiento: fechaNacimiento+' 00:00:00', fechaIngreso: fechaIngreso+' 00:00:00'});

    this.service.crear(this.funcionarioForm.value)
      .subscribe(
        () => {
          this.toastr.success('Peticion realizada con Exitos');
          this.router.navigate(['home/administrador/listar-funcionario']);
          document.getElementById('cerrarModal').click();
        },
        error => {
          this.toastr.error(error);
        },
        );
  }

  private construirFormularioFuncionario(){
    this.funcionarioForm = new FormGroup({
      nombre: new FormControl(''),
      cedula: new FormControl(''),
      salario: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      fechaIngreso: new FormControl(''),
    });

  }

}

