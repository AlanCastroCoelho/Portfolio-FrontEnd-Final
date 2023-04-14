import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/Models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {
  public selectedPerson: Persona = null;
  editPersonForm: FormGroup;

  constructor(private router: Router,
    public modal: NgbActiveModal,
    public formbuilder: FormBuilder,
    private sPersona: PersonaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this.selectedPerson);
    const id = this.selectedPerson.id;
    this.setForm(id);
  }

  onUpdate() {
    this.selectedPerson = this.editPersonForm.value;
    this.sPersona.update(this.selectedPerson.id, this.selectedPerson).subscribe(
      (data) => {
        this.router.navigateByUrl('');
      },
      (err) => {}
    );
  }

  private setForm(id: number) {
    this.editPersonForm = this.formbuilder.group({
      id: [this.selectedPerson.id],
      nombre: [this.selectedPerson.nombre],
      apellido: [this.selectedPerson.apellido],
      img: [this.selectedPerson.img],
      sobreMi: [this.selectedPerson.sobreMi],
      titulo: [this.selectedPerson.titulo]
    });
  }

}
