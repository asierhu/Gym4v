// Modelo de la actividad
export class Activity {

    // Atributos
    horario: string;
    date: string;
    monitor: string[];
    type: string;

    // Constructor sin ningun atributo para cuando la actividad está vacía

    // Constructor con todos los atributos
    constructor(horario: string, date: string, monitor: string[], type: string) {
        this.horario = horario;
        this.date = date;
        this.monitor = monitor;
        this.type = type;
    }
}