import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia/edit-experiencia/edit-experiencia.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@NgModule({
  declarations: [
    ExperienciaComponent,
    EditExperienciaComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ExperienciaComponent,
    EditExperienciaComponent
  ],
  providers:[
    SExperienciaService
  ]
})
export class ExperienciaModule { }
