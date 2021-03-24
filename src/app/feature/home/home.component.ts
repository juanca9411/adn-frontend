import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idFuncionario:number;
  homeForm:FormGroup;

  textoDeInput:number;

  constructor(private router:Router) { 
  }
   ngOnInit() {
    this.construirFormularioFuncionario();
  }

  goFuncionario(){
    let id:string=this.homeForm.value.idFuncionario;
    this.router.navigate(['home/funcionario'+'/'+id]);
    document.getElementById('cerrarModal').click();
  }

  goAdministrador(){
    this.router.navigate(['home/administrador']);
  }
  
 private construirFormularioFuncionario(){
  this.homeForm = new FormGroup({
    idFuncionario: new FormControl(''),
  });
}

}

