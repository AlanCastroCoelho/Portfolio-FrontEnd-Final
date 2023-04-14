export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    sobreMi: String;
    titulo: String;

    constructor(nombre: string,apellido: string, img: string, sobreMi: string, titulo: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.sobreMi = sobreMi;
        this.titulo = titulo;
    }
}
