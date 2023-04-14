import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-proyects',
  templateUrl: './edit-proyects.component.html',
  styleUrls: ['./edit-proyects.component.css']
})
export class EditProyectsComponent implements OnInit {

  selectedProyect: Proyectos = null;
  editProyectForm: FormGroup;

  constructor( private proyectosS: ProyectosService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    public modal: NgbActiveModal,
    public formbuilder:FormBuilder) { }

    ngOnInit(): void {
      console.log(this.selectedProyect);
      const id = this.selectedProyect.id;
      this.setForm(id);
    }


    onUpdate(){
      this.selectedProyect = this.editProyectForm.value;
      this.proyectosS.update(this.selectedProyect.id, this.selectedProyect).subscribe(
        data => {
          this.router.navigateByUrl('');
        }, err => {
         
        }
      )
    }

  private setForm(id: number) {
      
    this.editProyectForm = this.formbuilder.group({
      id: [this.selectedProyect.id],
      nombreP: [this.selectedProyect.nombreP],
      descripcionP: [this.selectedProyect.descripcionP],
      urlImg: [this.selectedProyect.urlImg],
      urlRepo: [this.selectedProyect.urlRepo],
      urlLiveDemo: [this.selectedProyect.urlLiveDemo]
    });


}

}
