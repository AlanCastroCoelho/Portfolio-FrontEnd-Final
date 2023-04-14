import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';
import { CargarScriptsService } from './../../services/cargar-scripts.service';
import { ShowProyectComponent } from './show-proyect/show-proyect.component';
import { EditProyectsComponent } from './edit-proyects/edit-proyects.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent implements OnInit, OnDestroy {
  proyectos: Proyectos[] = [];
  subscription: Subscription;
  indxShowProyect: number;
  showProyect = false;

  nombreP: string;
  descripcionP: string;
  urlImg: string;
  urlRepo: string;
  urlLiveDemo: string;

  constructor(
    private proyectosS: ProyectosService,
    private tokenService: TokenService,
    private router: Router,
    private _CargarScripts: CargarScriptsService,
    private modalService: NgbModal
  ) {
    _CargarScripts.Carga(['Proyect Hover Effect/proyectHover']);
  }

  isLogged = false;

  cargarProyectos(): void {
    this.proyectosS.lista().subscribe((data) => {
      this.proyectos = data;
    });
  }

  ngOnInit(): void {
    this.cargarProyectos();

    this.subscription = this.proyectosS.refresh$.subscribe(() => {
      this.cargarProyectos();
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectosS.delete(id).subscribe(
        (data) => {
          this.cargarProyectos();
        },
        (err) => {
          alert('No se pudo eliminar');
        }
      );
    }
  }

  selectedProyect(index: number) {
    this.showProyect = !this.showProyect;
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

  onCreate(): void {
    const proyecto = new Proyectos(
      this.nombreP,
      this.descripcionP,
      this.urlImg,
      this.urlRepo,
      this.urlLiveDemo
    );
    this.proyectosS.save(proyecto).subscribe(
      (data) => {
        alert('Proyecto creado correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo al añadir el proyecto');
        this.router.navigate(['']);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Observable cerrado');
  }
}
