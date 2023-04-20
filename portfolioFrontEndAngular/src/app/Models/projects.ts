export class Projects {

    id?: number;
    nombreP: string;
    descripcionP: string;
    urlImg:string;
    urlRepo:string;
    urlLiveDemo:string;

    constructor(nombreP: string, descripcionP: string, urlImg: string, urlRepo: string, urlLiveDemo: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.urlImg = urlImg;
        this.urlRepo = urlRepo;
        this.urlLiveDemo = urlLiveDemo;
    }
}
