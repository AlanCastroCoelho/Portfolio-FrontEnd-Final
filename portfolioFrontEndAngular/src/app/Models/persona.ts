export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    sobreMi: string;
    titulo: string;

    constructor(nombre: string,apellido: string, img: string, sobreMi: string, titulo: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.sobreMi = sobreMi;
        this.titulo = titulo;
    }
}
