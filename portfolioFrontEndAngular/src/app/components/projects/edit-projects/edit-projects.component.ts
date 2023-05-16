import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Projects } from 'src/app/Models/projects';
import { ProjectsService } from 'src/app/services/projects.service';
import { FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css','../../../../assets/css/forms.css']
})
export class EditProjectsComponent implements OnInit {

  selectedProject: Projects = null;
  editProjectForm: FormGroup;

  constructor( private projectsS: ProjectsService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    public modal: NgbActiveModal,
    public formbuilder:FormBuilder) { }

    ngOnInit(): void {
      console.log(this.selectedProject);
      const id = this.selectedProject.id;
      this.setForm(id);
    }


    onUpdate(){
      this.selectedProject = this.editProjectForm.value;
      this.projectsS.update(this.selectedProject.id, this.selectedProject).subscribe(
        data => {
          this.router.navigateByUrl('');
        }, err => {
         
        }
      )
    }

  private setForm(id: number) {
      
    this.editProjectForm = this.formbuilder.group({
      id: [this.selectedProject.id],
      nombreP: [this.selectedProject.nombreP],
      descripcionP: [this.selectedProject.descripcionP],
      urlImg: [this.selectedProject.urlImg],
      urlRepo: [this.selectedProject.urlRepo],
      urlLiveDemo: [this.selectedProject.urlLiveDemo]
    });


}

}
