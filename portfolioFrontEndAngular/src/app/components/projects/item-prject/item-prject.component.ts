import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Projects } from 'src/app/Models/projects';
import { TokenService } from 'src/app/services/token.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProjectsComponent } from '../edit-projects/edit-projects.component';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-item-prject',
  templateUrl: './item-prject.component.html',
  styleUrls: ['./item-prject.component.css'],
  animations: [
    trigger('expandAnimation', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '155px' })),
      transition('false <=> true', animate('600ms ease')),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition('* => false', [
        style({ opacity: 1 }),
        animate('800ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ItemPrjectComponent implements OnInit {
  @Input() index: number = 0;
  @Input() projects?: Projects;

  @Output() showProjectEvent = new EventEmitter<number>();
  @Output() deleteProject = new EventEmitter<number>();

  constructor(
    private tokenService: TokenService,
    private modalService: NgbModal
  ) {}
  isLogged = false;
  showProject = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
 
  delete() {
   this.deleteProject.emit(this.index);
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

  showwProject(): void {
    this.showProject = !this.showProject;
  }
}
