import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/Models/persona';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  persona: Persona;
  loading: boolean = false;

  tiempoEspera: number = 30000; // tiempo de espera máximo permitido en milisegundos
  subscription: Subscription;

  constructor(public personaS: PersonaService,
    private tokenService: TokenService) {}

 

   ngOnInit(): void {

    this.loading = true; // iniciar pantalla de carga
    this.cargarPersona();
    this.subscription = this.personaS.refresh$.subscribe(() => {
      this.cargarPersona();
    });
  }
  
  cargarPersona(): void {
    const personaId = 1;
    this.loading = true;
    let timeoutId = setTimeout(() => {
      window.alert("¿Demora demasiado? Recarga la Web.");
    }, this.tiempoEspera); 
    this.personaS.detail(personaId).subscribe((data) => {
      clearTimeout(timeoutId); 
      this.persona = data;
      this.loading = false; 
    });
  }




}
