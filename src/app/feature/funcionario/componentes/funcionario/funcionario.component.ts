import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor(private activaRouter:ActivatedRoute) {
   }

   idFuncionario:number;

  ngOnInit(): void {
    this.idFuncionario = +this.activaRouter.snapshot.paramMap.get('idFuncionario');
  }

}
