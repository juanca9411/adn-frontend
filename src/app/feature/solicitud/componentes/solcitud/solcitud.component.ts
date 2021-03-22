import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solcitud',
  templateUrl: './solcitud.component.html',
  styleUrls: ['./solcitud.component.css']
})
export class SolcitudComponent implements OnInit {


  constructor(private activaRouter:ActivatedRoute) { }

  idFuncionario:number;

  ngOnInit(): void {
    this.idFuncionario = +this.activaRouter.snapshot.paramMap.get('idFuncionario');
  }

}
