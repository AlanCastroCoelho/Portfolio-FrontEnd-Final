import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.min.css'],
})
export class HeroComponent implements OnInit {
  loading: boolean = false;

  tiempoEspera: number = 30000; // tiempo de espera máximo permitido en milisegundos
  subscription: Subscription;

  constructor() {}

   ngOnInit(): void {

  }

  toggleBodyScroll(): void {
    if (this.loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }
  

}
