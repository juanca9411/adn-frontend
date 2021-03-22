export class DiaFestivo {
    codigoFecha: number;
    dia:String;
    fecha:Date;
  

    constructor(codigoFecha:number,dia:String,fecha:Date) {
        this.codigoFecha=codigoFecha;
        this.dia=dia;
        this.fecha=fecha;      
    }
}
