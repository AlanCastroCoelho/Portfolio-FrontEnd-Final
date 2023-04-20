import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Projects } from 'src/app/Models/projects';
import { ProjectsService } from 'src/app/services/projects.service';
import { TokenService } from 'src/app/services/token.service';
import { CargarScriptsService } from '../../services/cargar-scripts.service';
import { ShowProjectComponent } from './show-project/show-project.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projecs',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Projects[] = [];
  subscription: Subscription;
  indxShowProject: number;
  showProject = false;

  nombreP: string;
  descripcionP: string;
  urlImg: string;
  urlRepo: string;
  urlLiveDemo: string;

  constructor(
    private projectsS: ProjectsService,
    private tokenService: TokenService,
    private router: Router,
    private _CargarScripts: CargarScriptsService,
    private modalService: NgbModal
  ) {
    _CargarScripts.Carga(['Project Hover Effect/projectHover']);
    
  }

  isLogged = false;

  cargarProyectos(): void {
    this.projectsS.lista().subscribe((data) => {
      this.projects = data;
    });
  }

  ngOnInit(): void {
    this.cargarProyectos();

    this.subscription = this.projectsS.refresh$.subscribe(() => {
      this.cargarProyectos();
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  delete(id?: number) {
    if (id != undefined) {
      this.projectsS.delete(id).subscribe(
        (data) => {
          this.cargarProyectos();
        },
        (err) => {
          alert('No se pudo eliminar');
        }
      );
    }
  }

  selectedProject(index: number) {
    this.showProject = !this.showProject;
  }

  editarItem(projects: Projects) {
    const ref = this.modalService.open(EditProjectsComponent);
    ref.componentInstance.selectedProject = projects;
    ref.result.then(
      (yes) => {
        console.log('Ok Click');
      },
      (cancel) => {
        console.log('Cancel Click');
      }
    );
  }

  onCreate(): void {
    const project = new Projects(
      this.nombreP,
      this.descripcionP,
      this.urlImg,
      this.urlRepo,
      this.urlLiveDemo
    );
    this.projectsS.save(project).subscribe(
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('Observable cerrado');
  }
}
