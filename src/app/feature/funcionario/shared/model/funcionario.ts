export class Funcionario {

    idFuncionario:number;
    nombre:string;
    cedula:string;
    salario:number;
    fechaNacimiento:Date;
    fechaIngreso:Date;

    constructor(idFuncionario:number,nombre:string,cedula:string,salario:number,
      fechaNacimiento:Date,fechaIngreso:Date) {

            this.idFuncionario=idFuncionario;
            this.nombre=nombre;
            this.cedula=cedula;
            this.salario=salario;
            this.fechaNacimiento=fechaNacimiento;
            this.fechaIngreso=fechaIngreso;
    }
}
