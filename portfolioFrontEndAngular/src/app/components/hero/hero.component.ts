import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { gsap } from 'gsap';
import { map, Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/Models/persona';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit,AfterViewInit {
  persona: Persona;
  loading: boolean = false;

  tiempoEspera: number = 16000; // tiempo de espera máximo permitido en milisegundos
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
      window.alert("¿Demora demasiado? Presiona F5 para Recargar la Web.");
    }, this.tiempoEspera); // muestra el mensaje después de 'tiempoEspera' milisegundos
    this.personaS.detail(personaId).subscribe((data) => {
      clearTimeout(timeoutId); // cancela el timeout si la respuesta de la base de datos llega antes de 'tiempoEspera'
      this.persona = data;
      this.loading = false; // oculta la pantalla de carga después de que se asignan los datos
    });
  }

  ngAfterViewInit() {/*
    // Animación del elemento 1
    gsap.from('.in-right', {
      duration: 1,
      x: 52,
      opacity: 0,

      delay: 0.6
    });
  
    gsap.from('.in-left', {
      duration: 1,
      x: -52,
      opacity: 0,

      delay: 0.9
    });
  
    gsap.from('.upward', {
      duration: 1,
      y: 100,
      opacity: 0,

      delay: 0.7
    });

    gsap.from('.fade-in', {
      opacity: 0,
      duration: 1,
      delay: 1.1,
      ease: 'power2.inOut'
    });
*/
  }


}
