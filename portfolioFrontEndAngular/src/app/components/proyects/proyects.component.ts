import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

proyectos: Proyectos [] = [];


nombreP: string;
    descripcionP: string;
    urlImg: string;
    urlRepo: string;
    urlLiveDemo: string;

  constructor(private proyectosS: ProyectosService,
    private tokenService: TokenService,
    private router: Router) { }

    isLogged = false;

    cargarProyectos(): void{
      this.proyectosS.lista().subscribe(
        data => {
          this.proyectos = data;
        }
      )
    }

    ngOnInit(): void {
      this.cargarProyectos();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }
    delete(id?: number){
      if( id != undefined){
        this.proyectosS.delete(id).subscribe(
          data => {
            this.cargarProyectos();
          }, err => {
            alert("No se pudo eliminar");
          }
        )
      }
    }
  
    onCreate(): void{
      const proyectos = new Proyectos(this.nombreP, this.descripcionP,this.urlImg,this.urlRepo,this.urlLiveDemo);
      this.proyectosS.save(proyectos).subscribe(
        data => {
          alert("Proyecto creado correctamente");
          this.router.navigate(['']);
        }, err =>{
          alert("Fallo al añadir el proyecto");
          this.router.navigate(['']);
        }
      )
    }
}
