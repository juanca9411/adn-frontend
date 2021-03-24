import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Solicitud } from '../../shared/model/solicitud';
import { SolicitudService } from '../../shared/service/solicitud.service';

@Component({
  selector: 'app-listar-solicitud-por-funcionario',
  templateUrl: './listar-solicitud-por-funcionario.component.html',
  styleUrls: ['./listar-solicitud-por-funcionario.component.css']
})
export class ListarSolicitudPorFuncionarioComponent implements OnInit {

  solicitudes: Solicitud[];
  idFuncionario: number;

  constructor(private router: Router, private service: SolicitudService, private activaRouter: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.idFuncionario = + this.activaRouter.snapshot.paramMap.get('idFuncionario');
    this.service.consultarByIdFuncionario(this.idFuncionario)
      .subscribe(data => {
        this.solicitudes = data;
      },error =>{
        this.toastr.error(error);
      });
  }

  registrarSolicitud() {
    this.router.navigate(['registrar-solicitud']);
  }

}
