import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/Models/skill';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-bttn-edit-del',
  templateUrl: './bttn-edit-del.component.html',
  styleUrls: ['./bttn-edit-del.component.css']
})
export class BttnEditDelComponent implements OnInit {
  @Input() skill? : Skill;
  @Input() skillId? : number;
  
  @Output() bttnEditClicked = new EventEmitter<Skill>();
  @Output() bttnDeleteClciked = new EventEmitter<number>();

  constructor( private skillS: SkillService
    ) { }

  ngOnInit(): void {
  }

  onClickBttnEdit() {
    this.bttnEditClicked.emit(this.skill);
  }

  onClickBttnDel() {
    this.bttnDeleteClciked.emit(this.skillId);
  }

}
