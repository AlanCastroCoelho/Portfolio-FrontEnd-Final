export class Redes {
    id?: number;
    nombreR: string;
    urlRed: string;
    urlIcon: string;

    constructor(nombreR: string, urlRed: string, urlIcon: string){
        this.nombreR = nombreR;
        this.urlRed = urlRed;
        this.urlIcon = urlIcon;
    }
}
