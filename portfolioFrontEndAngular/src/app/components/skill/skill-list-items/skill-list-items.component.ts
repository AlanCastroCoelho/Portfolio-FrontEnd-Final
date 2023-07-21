import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/Models/skill';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';
import { EditSkillComponent } from '../edit-skill/edit-skill.component';

@Component({
  selector: 'app-skill-list-items',
  templateUrl: './skill-list-items.component.html',
  styleUrls: ['./skill-list-items.component.css']
})
export class SkillListItemsComponent implements AfterViewInit {
  skill: Skill[] = [];
  subscription: Subscription;

@Input() skillType: string;

  constructor(private skillS: SkillService,
    private tokenService: TokenService,
    private router: Router,
    private modalService: NgbModal) { }
    
    isLogged = false;

  ngAfterViewInit(): void {
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
      this.skill = data;
    });
  }

  editarItem(objeto: Skill) {
    const ref = this.modalService.open(EditSkillComponent);
    ref.componentInstance.selectedSkill = objeto;
    ref.result.then(
      (yes) => {
        console.log('Ok Click');
      },
      (cancel) => {
        console.log('Cancel Click');
      }
    );
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        (data) => {
          this.cargarSkills();
        },
        (err) => {
          alert('No se pudo borrar la skill');
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Observable cerrado');
  }


}
