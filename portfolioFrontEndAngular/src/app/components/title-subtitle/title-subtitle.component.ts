import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-title-subtitle',
  templateUrl: './title-subtitle.component.html',
  styleUrls: ['./title-subtitle.component.css']
})
export class TitleSubtitleComponent implements OnInit {
@Input() section:string;
  constructor() { }

  ngOnInit(): void {
  }

}