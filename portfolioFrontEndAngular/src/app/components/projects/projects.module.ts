import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ShowProjectComponent } from './show-project/show-project.component';
import { ItemPrjectComponent } from './item-prject/item-prject.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleSubtitleModule } from '../title-subtitle/title-subtitle.module';
import { ProjectsService } from 'src/app/services/projects.service';

@NgModule({
  declarations: [
    ProjectsComponent,
  ShowProjectComponent,
ItemPrjectComponent,
EditProjectsComponent],
  imports: [
    CommonModule,
    TitleSubtitleModule,
    ButtonsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProjectsComponent,
  ShowProjectComponent,
ItemPrjectComponent,
EditProjectsComponent
  ],
  providers:[
    ProjectsService
  ]
})
export class ProjectsModule { }
