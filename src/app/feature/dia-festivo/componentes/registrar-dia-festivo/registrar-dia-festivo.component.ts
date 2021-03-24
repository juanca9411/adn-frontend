import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ManejadorError } from '@core/interceptor/manejador-error';
import { ToastrService } from 'ngx-toastr';
import { DiaFestivoService } from '../../shared/service/dia-festivo.service';

@Component({
  selector: 'app-registrar-dia-festivo',
  templateUrl: './registrar-dia-festivo.component.html',
  styleUrls: ['./registrar-dia-festivo.component.css']
})
export class RegistrarDiaFestivoComponent implements OnInit {

  diaFestivoForm: FormGroup;
  resultado:boolean;
  constructor(protected service: DiaFestivoService,protected toastr: ToastrService,protected manejadorError:ManejadorError) { }

  ngOnInit(): void {
    this.construirFormularioDiasFestivo();
  }

  registrar() {
    let fechaNew: string = this.diaFestivoForm.value.fecha;
    this.diaFestivoForm.patchValue({ fecha: fechaNew + ' 00:00:00' });

    this.service.crear(this.diaFestivoForm.value)
      .subscribe(
        () => {
          this.resultado=true;
          this.toastr.success('Peticion realizada con Exitos');
          document.getElementById('cerrarModal').click();
        },
        error => {
          this.resultado=false;
          this.toastr.error(error);
        });
  }

  private construirFormularioDiasFestivo() {
    this.diaFestivoForm = new FormGroup({
      dia: new FormControl(''),
      fecha: new FormControl('')
    });

  }


}
