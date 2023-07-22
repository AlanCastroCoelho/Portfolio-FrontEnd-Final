import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Skill } from 'src/app/Models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.min.css'],
})


export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  // Variables para Crear Nuevo Skill
  nombre: string;
  porcentaje: number = 50;
  tipoSkill: string;

  constructor(
    private skillS: SkillService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  isLogged = false;

  ngOnInit(): void {
        this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe((data) => {
      this.skills = data;
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
}
