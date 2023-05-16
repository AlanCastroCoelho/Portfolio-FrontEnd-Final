import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css','../../../../assets/css/forms.css'],
})
export class EditEducacionComponent implements OnInit {
  public selectedEducation: Educacion = null;
  editEducationForm: FormGroup;

  constructor(
    private educacionS: EducacionService,
    private router: Router,
    public modal: NgbActiveModal,
    public formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.selectedEducation);
    const id = this.selectedEducation.id;
    this.setForm(id);
  }

  onUpdate() {
    this.selectedEducation = this.editEducationForm.value;
    this.educacionS
      .update(this.selectedEducation.id, this.selectedEducation)
      .subscribe(
        (data) => {
          this.router.navigateByUrl('');
        },
        (err) => {}
      );
  }

  get editFormData() {
    return this.editEducationForm.controls;
  }

  private setForm(id: number) {
    this.editEducationForm = this.formbuilder.group({
      id: [this.selectedEducation.id],
      nombreE: [this.selectedEducation.nombreE],
      descripcionE: [this.selectedEducation.descripcionE],
      fechaInicio: [this.selectedEducation.fechaInicio],
      fechaFin: [this.selectedEducation.fechaFin]
    });
  }
}
