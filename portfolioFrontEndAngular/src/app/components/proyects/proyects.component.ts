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

}
