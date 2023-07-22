import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-title-subtitle',
  templateUrl: './title-subtitle.component.html',
  styleUrls: ['./title-subtitle.component.min.css']
})
export class TitleSubtitleComponent {
@Input() section:string;
  constructor() { }
}
