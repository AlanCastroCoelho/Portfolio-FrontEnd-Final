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
export class HeroComponent implements AfterViewInit {
  persona: Persona;
  subscription: Subscription;
  constructor(public personaS: PersonaService,
    private tokenService: TokenService) {}

 

   ngOnInit(): void {
    this.cargarPersona();
    this.subscription = this.personaS.refresh$.subscribe(() => {
      this.cargarPersona();
    });
  }
  
  cargarPersona(): void {
    const personaId = 1;
    this.personaS.detail(personaId).subscribe((data) => {
      this.persona = data;
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
