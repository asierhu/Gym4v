// Modelo de la monitor
export class Monitor {

    // Atributos
    id: number = 0;
    img: string;
    name: string;
    email: string;
    tel: string;
    fechaInicio: string;

    // Constructor con todos los atributos
    constructor(id:number, name: string,  email: string, tel: string, fechaInicio: string, img: string) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.fechaInicio = fechaInicio;

    }
}