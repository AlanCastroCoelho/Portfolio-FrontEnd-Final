import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Models/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})
export class EditExperienciaComponent implements OnInit {
  selectedExp: Experiencia = null;
  editExpForm: FormGroup;

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router,
    public modal: NgbActiveModal,
    public formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.selectedExp);
    const id = this.selectedExp.id;
    this.setForm(id);
  }

  onUpdate() {
    this.selectedExp = this.editExpForm.value;
    this.sExperiencia.update(this.selectedExp.id, this.selectedExp).subscribe(
      (data) => {
        this.router.navigateByUrl('');
      },
      (err) => {}
    );
  }

  private setForm(id: number) {
    this.editExpForm = this.formbuilder.group({
      id: [this.selectedExp.id],
      nombreE: [this.selectedExp.nombreE],
      descripcionE: [this.selectedExp.descripcionE],
    });
  }
}
