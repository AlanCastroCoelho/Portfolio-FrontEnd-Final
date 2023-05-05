import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-image-cont',
  templateUrl: './skill-image-cont.component.html',
  styleUrls: ['./skill-image-cont.component.css']
})
export class SkillImageContComponent implements OnInit {
@Input() skillTpe:String;

  constructor() { }

  ngOnInit(): void {
  }

}
