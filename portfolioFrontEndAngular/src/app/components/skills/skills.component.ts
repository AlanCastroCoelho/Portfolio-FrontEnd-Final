import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Skill } from 'src/app/Models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditSkillComponent } from './edit-skill/edit-skill.component';
import { Projects } from 'src/app/Models/projects';
import { Educacion } from 'src/app/Models/educacion';
import { Experiencia } from 'src/app/Models/experiencia';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})


export class SkillsComponent implements OnInit, OnDestroy {
  skill: Skill[] = [];
  subscription: Subscription;
  loading: boolean = false;
  // Variables para Crear Nuevo Skill
  nombre: string;
  porcentaje: number = 50;
  tipoSkill: string;

  constructor(
    private skillS: SkillService,
    private tokenService: TokenService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.loading = true; // iniciar pantalla de carga
    this.cargarSkills();

    this.subscription = this.skillS.refresh$.subscribe(() => {
      this.cargarSkills();
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe((data) => {
      setTimeout(() => { // Agregar una demora de 1 segundo antes de asignar false
        this.loading = false;
      }, 3000);
      this.skill = data;
    });
  }



  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje, this.tipoSkill);
    this.skillS.save(skill).subscribe(
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


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Observable cerrado');
  }

}
