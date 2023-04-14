import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-show-proyect',
  templateUrl: './show-proyect.component.html',
  styleUrls: ['./show-proyect.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('600ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ShowProyectComponent implements OnInit {
  @Input() proyectToShow?: Proyectos;
  @Input() indx: number;

  constructor(
    private route: ActivatedRoute,
    private proyectS: ProyectosService
  ) {}

  ngOnInit(): void {
    const proyectId = this.indx;
    this.proyectS.detail(proyectId).subscribe((data) => {
      this.proyectToShow = data;
    });
  }
}
