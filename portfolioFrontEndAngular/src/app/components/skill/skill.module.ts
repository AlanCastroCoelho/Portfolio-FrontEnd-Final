import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillListItemsComponent } from './skill-list-items/skill-list-items.component';
import { SkillImageContComponent } from './skill-image-cont/skill-image-cont.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';
import { SkillService } from 'src/app/services/skill.service';
import { ButtonsModule } from '../buttons/buttons.module';
import { LoadersModule } from '../loaders/loaders.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleSubtitleModule } from '../title-subtitle/title-subtitle.module';

@NgModule({
  declarations: [
    SkillsComponent,
    SkillListItemsComponent,
    SkillImageContComponent,
    EditSkillComponent,

  ],
  imports: [
    CommonModule,
    TitleSubtitleModule,
    ButtonsModule,
    LoadersModule,
    ReactiveFormsModule
  ],
  exports:[
    SkillsComponent,
    SkillListItemsComponent,
    SkillImageContComponent,
    EditSkillComponent
  ],
  providers:[
    SkillService
  ]
})
export class SkillModule { }
