import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Models/persona';
import { Redes } from 'src/app/Models/redes';
import { PersonaService } from 'src/app/services/persona.service';
import { RedesServiceService } from 'src/app/services/redes-service.service';
import { TokenService } from 'src/app/services/token.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditRedComponent } from '../edit-red/edit-red.component';
import { EditPersonaComponent } from '../edit-persona/edit-persona.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.min.css']
})
export class AboutMeComponent implements OnInit {
  @Output() loadingStatus = new EventEmitter<boolean>();

  persona: Persona;
  redes: Redes[] = [];
  subscription: Subscription;

    // Variables para Crear Nueva Red
    nombreR: string;
    urlRed: string;
    urlIcon: string;

  constructor(public personaS: PersonaService, 
    public redesService: RedesServiceService,
    private tokenService: TokenService,
    private router: Router,
    private modalService: NgbModal) {}

    isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  editarPersona(persona: Persona) {
    const ref = this.modalService.open(EditPersonaComponent);
    ref.componentInstance.selectedPerson = persona;
    ref.result.then(
      (yes) => {
        console.log('Ok Click');
      },
      (cancel) => {
        console.log('Cancel Click');
      }
    );
  }

  cargarPersona(): void {
    const personaId = 1;
    this.personaS.detail(personaId).subscribe((data) => {
      this.persona = data;
      this.cargarRedes();
      this.loadingStatus.emit(false);
    });
  }

  /*Funciones para Redes*/
  cargarRedes(): void {
    this.redesService.lista().subscribe((data) => {
      this.redes = data;

    });
  }

 
  deleteRed(id?: number) {
    if (id != undefined) {
      this.redesService.delete(id).subscribe(
        (data) => {
          this.cargarRedes();
        },
        (err) => {
          alert('No se pudo borrar la Red');
        }
      );
    }
  }

  editItemRed(redes: Redes) {
    const ref = this.modalService.open(EditRedComponent);
    ref.componentInstance.selectedRed = redes;
    ref.result.then(
      (yes) => {
        console.log('Ok Click');
      },
      (cancel) => {
        console.log('Cancel Click');
      }
    );
  }

  onCreateRed(): void {
    const redes = new Redes(this.nombreR, this.urlRed,this.urlIcon);
    this.redesService.save(redes).subscribe(
      (data) => {
        alert('Red creada correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo al añadir la Red');
        this.router.navigate(['']);
      }
    );
  }
}
