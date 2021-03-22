export class Solicitud {
    idFuncionario: number;
    numSolicitud: number;
    fechaSolicitud:Date;
    justificacion:String;
    estado:String;
    respuesta:String;

    constructor(idFuncionario:number,numSolicitud:number,fechaSolicitud:Date,justificacion:String,
        estado:String,respuesta:String) {

            this.idFuncionario=idFuncionario;
            this.numSolicitud=numSolicitud;
            this.fechaSolicitud=fechaSolicitud;
            this.justificacion=justificacion;
            this.estado=estado;
            this.respuesta=respuesta;
    }
}
