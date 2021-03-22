export class Funcionario {

    idFuncionario:number;
    nombre:String;
    cedula:String;
    salario:number;
    fechaNacimiento:Date;
    fechaIngreso:Date;

    constructor(idFuncionario:number,nombre:String,cedula:String,salario:number,
      fechaNacimiento:Date,fechaIngreso:Date) {

            this.idFuncionario=idFuncionario;
            this.nombre=nombre;
            this.cedula=cedula;
            this.salario=salario;
            this.fechaNacimiento=fechaNacimiento;
            this.fechaIngreso=fechaIngreso;
    }
}
