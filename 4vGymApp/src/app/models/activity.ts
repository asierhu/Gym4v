// Modelo de la actividad
export class Activity {

    // Atributos
    id: number = 0;
    fechaInicio: string;
    fechaFinal: string;
    date: Date;
    monitor: string[];
    type: string;
    isAvailable: boolean = false;

    // Constructor sin ningun atributo para cuando la actividad está vacía

    // Constructor con todos los atributos
    constructor(id:number, fechaInicio: string, fechaFinal: string, date: Date, monitor: string[], type: string, isAvailable: boolean) {
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.date = date;
        this.monitor = monitor;
        this.type = type;
        this.isAvailable = isAvailable;
    }
}