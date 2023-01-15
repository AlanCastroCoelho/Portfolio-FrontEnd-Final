import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Skill } from 'src/app/Models/skill';

import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];


  // Variables para Crear Nuevo Skill
  nombre: string;
  porcentaje: number;
  tipoSkill: string;

   // Variables para Refrescar
   reloadSkills = 0;
      //separar por tipo skill



  constructor(private skillS: SkillService,
     private tokenService: TokenService,
    private router: Router) {}

  isLogged = false;


  cargarSkills(): void{
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  actualizarSkills(){
    this.reloadSkills = this.reloadSkills * -1 + 1;
  }


onCreate(): void{
  const skill = new Skill(this.nombre, this.porcentaje, this.tipoSkill);
  this.skillS.save(skill).subscribe(
    data => {
      alert("Skill creada correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo al añadir la skill");
      this.router.navigate(['']);
    }
  )
}



  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }


  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}