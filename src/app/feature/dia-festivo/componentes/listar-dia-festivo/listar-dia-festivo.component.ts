import { Component, OnInit } from '@angular/core';
import { DiaFestivo } from '../../shared/model/dia-festivo';
import { DiaFestivoService } from '../../shared/service/dia-festivo.service';

@Component({
  selector: 'app-listar-dia-festivo',
  templateUrl: './listar-dia-festivo.component.html',
  styleUrls: ['./listar-dia-festivo.component.css']
})
export class ListarDiaFestivoComponent implements OnInit {

  diaFestivo: DiaFestivo[];
  constructor(private service: DiaFestivoService) { }

  ngOnInit(): void {
    this.service.listar()
    .subscribe(data => {
      this.diaFestivo = data
    });
  }

}
