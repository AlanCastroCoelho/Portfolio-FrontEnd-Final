import { AfterViewInit, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/Models/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditExperienciaComponent } from './edit-experiencia/edit-experiencia/edit-experiencia.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css','../../../../../assets/css/edu-exp.css']
})
export class ExperienciaComponent implements AfterViewInit {
  expe: Experiencia[] = [];
  selectedE: any;
  subscription: Subscription;
  seleccionado: number = -1;

  // Variables para Crear Nueva Experiencia
  nombreE: string;
  descripcionE: string;
  fechaInicio:Date;
  fechaFin:Date;

  constructor(
    private sExperiencia: SExperienciaService,
    private tokenService: TokenService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  isLogged = false;

  ngAfterViewInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe((data) => {
      this.expe = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        (data) => {
          this.cargarExperiencia();
        },
        (err) => {
          alert('No se pudo borrar la experiencia');
        }
      );
    }
  }

  editarItem(experiencia: Experiencia) {
    const ref = this.modalService.open(EditExperienciaComponent);
    ref.componentInstance.selectedExp = experiencia;
    this.subscribeToRefresh();
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
    const experiencia = new Experiencia(this.nombreE, this.descripcionE, this.fechaInicio, this.fechaFin);
    this.sExperiencia.save(experiencia).subscribe(
      (data) => {
        alert('Skill creada correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo al añadir la skill');
        this.router.navigate(['']);
      }
    );
  }

  selectExp(exp: Experiencia, i: number) {
    this.selectedE = exp;
    this.seleccionado = i;
  }

  private subscribeToRefresh() {
    if (!this.subscription) {
      this.subscription = this.sExperiencia.refresh$.subscribe(() => {
        this.cargarExperiencia();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
}
}
