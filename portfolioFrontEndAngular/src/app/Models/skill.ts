export class Skill {
    id?: number;
    nombre: string;
    porcentaje: number;
    tipoSkill:string;

    constructor(nombre:string, porcentaje: number, tipoSkill:string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.tipoSkill = tipoSkill;
    }
}
