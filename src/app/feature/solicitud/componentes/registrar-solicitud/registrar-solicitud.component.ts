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

  newMes = new Date().getMonth() + 1 < 9 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1;
  newDias = new Date().getDate() < 9 ? '0' + new Date().getDate() : new Date().getDate();
  newFecha = new Date().getUTCFullYear() + "-" + this.newMes + "-" + this.newDias + " 00:00:00";

  constructor(private service: SolicitudService, private router: Router, private activaRouter: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.idFuncionario = + this.activaRouter.snapshot.paramMap.get('idFuncionario');
    this.construirFormularioSolicitud();
  }

  registrar() {
    this.service.crearSolicitud(this.solicitudForm.value)
      .subscribe(
        data => {
          this.toastr.success("Peticion realizada con Exitos")
          console.log(data)
          this.router.navigate(["home/funcionario/" + this.idFuncionario + "/listar-solicitudes/" + this.idFuncionario])
        },
        error => {
          this.toastr.error(error)
          this.router.navigate(["home/funcionario/" + this.idFuncionario + "/listar-solicitudes/" + this.idFuncionario])
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
