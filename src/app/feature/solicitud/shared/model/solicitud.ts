export class Solicitud {
    idFuncionario: number;
    numSolicitud: number;
    fechaSolicitud:Date;
    justificacion:string;
    estado:string;
    respuesta:string;

    constructor(idFuncionario:number,numSolicitud:number,fechaSolicitud:Date,justificacion:string,
        estado:string,respuesta:string) {

            this.idFuncionario=idFuncionario;
            this.numSolicitud=numSolicitud;
            this.fechaSolicitud=fechaSolicitud;
            this.justificacion=justificacion;
            this.estado=estado;
            this.respuesta=respuesta;
    }
}
