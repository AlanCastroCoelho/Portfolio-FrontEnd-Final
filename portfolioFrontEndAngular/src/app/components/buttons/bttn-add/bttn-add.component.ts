import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/Models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { Experiencia } from 'src/app/Models/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { Projects } from 'src/app/Models/projects';
import { ProjectsService } from 'src/app/services/projects.service';
import { TokenService } from 'src/app/services/token.service';
import { Educacion } from 'src/app/Models/educacion';

@Component({
  selector: 'app-bttn-add',
  templateUrl: './bttn-add.component.html',
  styleUrls: ['./bttn-add.component.css']
})
export class BttnAddComponent implements OnInit {

  @Input() dataTarget: string;

    // Variables para Crear Nueva Educacion
    nombreE: string;
    descripcionE: string;
    fechaInicio: Date;
    fechaFin:Date;

    // Variables para Crear Nueva Skill
  nombre: string;
  porcentaje: number = 50;
  tipoSkill: string;

    // Variables para Crear Nueva Experiencia
    nombreExp: string;
    descripcionExp: string;

    // Variables para Crear Proyectos
    nombreP: string;
    descripcionP: string;
    urlImg: string;
    urlRepo: string;
    urlLiveDemo: string;

  constructor( private modalService: NgbModal, 
    private sExperiencia: SExperienciaService,
    private skillS: SkillService,
    private educacionS: EducacionService,
    private projectsS: ProjectsService,
    private tokenService: TokenService,
    private router: Router,) { }

  ngOnInit(): void {
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

  onCreateEdu(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.fechaInicio,this.fechaFin);
    this.educacionS.save(educacion).subscribe(
      (data) => {
        alert('Educacion creada correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo al añadir la Educacion');
        this.router.navigate(['']);
      }
    );
  }

  onCreateExp(): void {
    const experiencia = new Experiencia(this.nombreExp, this.descripcionExp,this.fechaInicio,this.fechaFin);
    this.sExperiencia.save(experiencia).subscribe(
      (data) => {
        alert('Experiencia creada correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo al añadir la experiencia');
        this.router.navigate(['']);
      }
    );
  }
  onCreatePryct(): void {
    const proyecto = new Projects(
      this.nombreP,
      this.descripcionP,
      this.urlImg,
      this.urlRepo,
      this.urlLiveDemo
    );
    this.projectsS.save(proyecto).subscribe(
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
}
