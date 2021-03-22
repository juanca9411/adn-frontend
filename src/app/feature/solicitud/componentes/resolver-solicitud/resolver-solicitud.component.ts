import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Solicitud } from '../../shared/model/solicitud';
import { SolicitudService } from '../../shared/service/solicitud.service';

@Component({
  selector: 'app-resolver-solicitud',
  templateUrl: './resolver-solicitud.component.html',
  styleUrls: ['./resolver-solicitud.component.css']
})
export class ResolverSolicitudComponent implements OnInit {

  resolversolicitudForm: FormGroup;
  solicitud: Solicitud;
  contractTypeValid:any;
  constructor(private activaRouter: ActivatedRoute,private router:Router ,private service: SolicitudService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.construirFormularioResolverSolicitud();

    this.activaRouter.queryParams.subscribe(p =>{
      this.desactivarButton(p.estado);
    })
  }

  resolver() {
    this.buildRequest();
    this.service.resolverSolicitud(this.solicitud)
      .subscribe(
        data => {
          this.toastr.success("Peticion realizada con Exitos")
          data;
          this.router.navigate(["home/administrador/listar-solicitud"]);
          document.getElementById('cerrarModal').click();
        },
        error => {
          this.toastr.error(error)
        });
  }
  
 private buildRequest(){
    this.activaRouter.queryParams
      .subscribe(params => {
        this.solicitud = new Solicitud(params.idFuncionario, params.numSolicitud, params.fechaSolicitud, params.justificacion,
          this.resolversolicitudForm.value.estado,
          this.resolversolicitudForm.value.respuesta);
      });
  }

  private construirFormularioResolverSolicitud() {
    this.resolversolicitudForm = new FormGroup({
      estado: new FormControl(''),
      respuesta: new FormControl(''),
    });
  }

  
desactivarButton(estado:any){
    if(estado=='Aprobado'||estado=='Rechazado'){
       this.contractTypeValid = false;
    }else{
      this.contractTypeValid = true;
    } 
}

}
