export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    sobreMi: String;

    constructor(nombre: String,apellido: String, img: String, sobreMi: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.sobreMi = sobreMi;
    }
}
