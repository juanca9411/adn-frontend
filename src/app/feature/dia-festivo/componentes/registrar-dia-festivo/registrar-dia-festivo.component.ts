import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DiaFestivoService } from '../../shared/service/dia-festivo.service';

@Component({
  selector: 'app-registrar-dia-festivo',
  templateUrl: './registrar-dia-festivo.component.html',
  styleUrls: ['./registrar-dia-festivo.component.css']
})
export class RegistrarDiaFestivoComponent implements OnInit {

  diaFestivoForm: FormGroup;
  constructor(private service: DiaFestivoService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.construirFormularioDiasFestivo();
  }

  registrar() {
    let fecha: Date = this.diaFestivoForm.value.fecha;
    this.diaFestivoForm.patchValue({ fecha: fecha + " 00:00:00" });

    this.service.crear(this.diaFestivoForm.value)
      .subscribe(
        data => {
          this.toastr.success("Peticion realizada con Exitos")
          data;
          document.getElementById('cerrarModal').click();
        },
        error => {
          this.toastr.error(error)
        });
  }

  private construirFormularioDiasFestivo() {
    this.diaFestivoForm = new FormGroup({
      dia: new FormControl(''),
      fecha: new FormControl('')
    });

  }


}
