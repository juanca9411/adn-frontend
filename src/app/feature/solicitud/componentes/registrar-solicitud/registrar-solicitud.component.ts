import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SolicitudService } from '../../shared/service/solicitud.service';


@Component({
  selector: 'app-registrar-solicitud',
  templateUrl: './registrar-solicitud.component.html',
  styleUrls: ['./registrar-solicitud.component.css']
})
export class RegistrarSolicitudComponent implements OnInit {

  solicitudForm: FormGroup;
  idFuncionario: number;
  nueve:number=9;
  month:number=new Date().getMonth() + 1;
  day:number=new Date().getDate();

  newMes = new Date().getMonth() + 1 < this.nueve ? '0' + this.month.toString() : this.month.toString();
  newDias = new Date().getDate() < this.nueve ? '0' + this.day.toString() : this.day.toString();
  newFecha = new Date().getUTCFullYear().toString() + '-' + this.newMes + '-' + this.newDias + ' 00:00:00';

  constructor(private service: SolicitudService, private router: Router, private activaRouter: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.idFuncionario = + this.activaRouter.snapshot.paramMap.get('idFuncionario');
    this.construirFormularioSolicitud();
  }

  registrar() {
    this.service.crearSolicitud(this.solicitudForm.value)
      .subscribe(
        () => {
          this.toastr.success('Peticion realizada con Exitos');
          this.router.navigate(['home/funcionario/' + this.idFuncionario.toString() + '/listar-solicitudes/' + this.idFuncionario.toString()]);
        },
        error => {
          this.toastr.error(error);
          this.router.navigate(['home/funcionario/' + this.idFuncionario.toString() + '/listar-solicitudes/' + this.idFuncionario.toString()]);
        });
  }

  private construirFormularioSolicitud() {
    this.solicitudForm = new FormGroup({
      idFuncionario: new FormControl(this.idFuncionario,),
      justificacion: new FormControl('',),
      fechaSolicitud: new FormControl(this.newFecha,),
      estado: new FormControl('Enviado')
    });
  }

}
