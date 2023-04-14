import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Proyectos } from 'src/app/Models/proyectos';
import { TokenService } from 'src/app/services/token.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProyectsComponent } from '../edit-proyects/edit-proyects.component';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-item-pryect',
  templateUrl: './item-pryect.component.html',
  styleUrls: ['./item-pryect.component.css'],
  animations: [
    trigger('expandAnimation', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '155px' })),
      transition('false <=> true', animate('600ms ease')),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition('* => false', [
        style({ opacity: 1 }),
        animate('800ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ItemPryectComponent implements OnInit {
  @Input() index: number = 0;
  @Input() proyects?: Proyectos;

  @Output() showProyectEvent = new EventEmitter<number>();
  @Output() eliminarProyecto = new EventEmitter<number>();

  constructor(
    private tokenService: TokenService,
    private modalService: NgbModal
  ) {}
  isLogged = false;
  showProyect = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
 
  eliminar() {
   this.eliminarProyecto.emit(this.index);
  }

  editarItem(proyectos: Proyectos) {
    const ref = this.modalService.open(EditProyectsComponent);
    ref.componentInstance.selectedProyect = proyectos;
    ref.result.then(
      (yes) => {
        console.log('Ok Click');
      },
      (cancel) => {
        console.log('Cancel Click');
      }
    );
  }

  showwProyect(): void {
    this.showProyect = !this.showProyect;
  }
}
