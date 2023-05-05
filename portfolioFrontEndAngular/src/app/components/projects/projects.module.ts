import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ShowProjectComponent } from './show-project/show-project.component';
import { ItemPrjectComponent } from './item-prject/item-prject.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { LoadersModule } from '../loaders/loaders.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleSubtitleModule } from '../title-subtitle/title-subtitle.module';

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
    LoadersModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProjectsComponent,
  ShowProjectComponent,
ItemPrjectComponent,
EditProjectsComponent
  ],
  providers:[]
})
export class ProjectsModule { }
