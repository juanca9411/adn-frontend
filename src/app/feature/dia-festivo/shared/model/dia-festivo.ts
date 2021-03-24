export class DiaFestivo {
    codigoFecha: number;
    dia:string;
    fecha:Date;
  

    constructor(codigoFecha:number,dia:string,fecha:Date) {
        this.codigoFecha=codigoFecha;
        this.dia=dia;
        this.fecha=fecha;      
    }
}
