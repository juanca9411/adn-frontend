import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Solicitud } from '../../shared/model/solicitud';
import { SolicitudService } from '../../shared/service/solicitud.service';
import { ResolverSolicitudComponent } from '../resolver-solicitud/resolver-solicitud.component';

@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styleUrls: ['./listar-solicitud.component.css']
})
export class ListarSolicitudComponent implements OnInit {

  solicitudes: Solicitud[];
  constructor(private service: SolicitudService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.listar()
      .subscribe(data => {
        this.solicitudes = data
      },error =>{
        this.toastr.error(error)
    });

      
  }

  goResolverSolicitud(solicitud:Solicitud){
    this.router.navigate(['home/administrador/resolver-solicitud'],{ queryParams:solicitud})
  }

  
}
