import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/Models/educacion';
import { Experiencia } from 'src/app/Models/experiencia';
import { Redes } from 'src/app/Models/redes';
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

@Input() redes?: Redes;
@Input() redId?: number;

@Input()edu?:Educacion;
@Input() eduId?: number;

@Input()exp?:Experiencia;
@Input()expId?: number;

  
  @Output() bttnEditClicked = new EventEmitter<Skill>();
  @Output() bttnDeleteClciked = new EventEmitter<number>();

  @Output() bttnEditRClicked = new EventEmitter<Redes>();
  @Output() bttnDeleteRClciked = new EventEmitter<number>();

  @Output() bttnEditEdClicked = new EventEmitter<Educacion>();
  @Output() bttnDeleteEdClciked = new EventEmitter<number>();

  @Output() bttnEditExpClicked = new EventEmitter<Experiencia>();
  @Output() bttnDeleteExpClciked = new EventEmitter<number>();

  constructor( private skillS: SkillService
    ) { }

  ngOnInit(): void {
  }

  onClickBttnEdit() {
    if(this.redes){
     this.bttnEditRClicked.emit(this.redes);
    }
    else if(this.edu){
    this.bttnEditEdClicked.emit(this.edu);
    }
    else if(this.exp){
      this.bttnEditExpClicked.emit(this.exp);
    }
    else{
    this.bttnEditClicked.emit(this.skill);}
  }

  onClickBttnDel() {
    if(!this.skill){
     this.bttnDeleteRClciked.emit(this.redId)
    }
    else{
    this.bttnDeleteClciked.emit(this.skillId);
  }
  }

}
