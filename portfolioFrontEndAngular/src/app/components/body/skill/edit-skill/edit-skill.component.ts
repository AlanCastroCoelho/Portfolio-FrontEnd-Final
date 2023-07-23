import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/Models/skill';
import { SkillService } from 'src/app/services/skill.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css','../../../../../assets/css/forms.css'],
})
export class EditSkillComponent implements OnInit {
  public selectedSkill: Skill = null;
  editSkillForm: FormGroup;

  constructor(
    private skillS: SkillService,
    private router: Router,
    public modal: NgbActiveModal,
    public formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.selectedSkill);
    const id = this.selectedSkill.id;
    this.setForm(id);
  }

  onUpdate() {
    this.selectedSkill = this.editSkillForm.value;
    this.skillS.update(this.selectedSkill.id, this.selectedSkill).subscribe(
      (data) => {
        this.router.navigateByUrl('');
      },
      (err) => {}
    );
  }

  get editFormData() {
    return this.editSkillForm.controls;
  }

  private setForm(id: number) {
    this.editSkillForm = this.formbuilder.group({
      id: [this.selectedSkill.id],
      nombre: [this.selectedSkill.nombre],
      porcentaje: [this.selectedSkill.porcentaje],
      tipoSkill: [this.selectedSkill.tipoSkill],
    });
  }
}
