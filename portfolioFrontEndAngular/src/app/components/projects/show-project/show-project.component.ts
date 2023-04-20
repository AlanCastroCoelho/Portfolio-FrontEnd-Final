import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/Models/projects';
import { ProjectsService } from 'src/app/services/projects.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('600ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ShowProjectComponent implements OnInit {
  @Input() projectToShow?: Projects;
  @Input() indx: number;

  constructor(
    private route: ActivatedRoute,
    private projectS: ProjectsService
  ) {}

  ngOnInit(): void {
    const projectId = this.indx;
    this.projectS.detail(projectId).subscribe((data) => {
      this.projectToShow = data;
    });
  }
}
