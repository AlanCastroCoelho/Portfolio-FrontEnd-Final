import { Component, Input } from '@angular/core';
import { Projects } from 'src/app/Models/projects';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('900ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('900ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ShowProjectComponent{
  @Input() projectToShow?: Projects;
  @Input() indx: number;

  constructor(
  ) {}
}
