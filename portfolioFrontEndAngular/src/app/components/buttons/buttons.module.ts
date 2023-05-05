import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BttnAddComponent } from './bttn-add/bttn-add.component';
import { BttnEditDelComponent } from './bttn-edit-del/bttn-edit-del.component';
import { SkillService } from 'src/app/services/skill.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BttnAddComponent,
    BttnEditDelComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    BttnAddComponent,
    BttnEditDelComponent
  ],
  providers:[
    SkillService
  ]
})
export class ButtonsModule { }
