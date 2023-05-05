import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia/edit-experiencia/edit-experiencia.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadersModule } from '../loaders/loaders.module';

@NgModule({
  declarations: [
    ExperienciaComponent,
    EditExperienciaComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    ReactiveFormsModule,
    LoadersModule
  ],
  exports:[
    ExperienciaComponent,
    EditExperienciaComponent
  ]
})
export class ExperienciaModule { }
