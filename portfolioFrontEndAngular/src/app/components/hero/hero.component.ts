import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/Models/persona';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.min.css'],
})
export class HeroComponent implements OnInit {
  loading: boolean = false;

  tiempoEspera: number = 30000; // tiempo de espera máximo permitido en milisegundos
  subscription: Subscription;

  constructor(public personaS: PersonaService) {}

 

   ngOnInit(): void {
   /* this.cargarPersona();*/
  }
  
  /*
  cargarPersona(): void {
    const personaId = 1;
    this.loading = true;
    this.toggleBodyScroll();
    let timeoutId = setTimeout(() => {
      window.alert("¿Demora demasiado? Recarga la Web.");
    }, this.tiempoEspera); 
    this.personaS.detail(personaId).subscribe((data) => {
      clearTimeout(timeoutId); 
      this.persona = data;
      this.loading = false;
      this.toggleBodyScroll();
    });
  }
*/
  toggleBodyScroll(): void {
    if (this.loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
  

}
