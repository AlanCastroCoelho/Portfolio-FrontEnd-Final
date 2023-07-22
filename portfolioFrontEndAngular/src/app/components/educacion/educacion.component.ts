import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEducacionComponent } from './edit-educacion/edit-educacion.component';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css','../../../assets/css/edu-exp.css'],
})
export class EducacionComponent implements AfterViewInit, OnDestroy {
  educacion: Educacion[] = [];
  selectedE: any;
  subscription: Subscription;
  seleccionado: number = -1;

  constructor(
    private educacionS: EducacionService,
    private tokenService: TokenService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  isLogged = false;

  ngAfterViewInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe((data) => {
      this.educacion = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe(
        (data) => {
          this.cargarEducacion();
        },
        (err) => {
          alert('No se pudo eliminar');
        }
      );
    }
  }

  editarItem(educacion: Educacion) {
    const ref = this.modalService.open(EditEducacionComponent);
    ref.componentInstance.selectedEducation = educacion;
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


  selectEducacion(educacion: Educacion, i: number) {
    this.selectedE = educacion;
    this.seleccionado = i;
  }

  private subscribeToRefresh() {
    if (!this.subscription) {
      this.subscription = this.educacionS.refresh$.subscribe(() => {
        this.cargarEducacion();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
}
}
