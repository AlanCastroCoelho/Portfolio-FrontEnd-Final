import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '../buttons/buttons.module';
import { EducacionComponent } from './educacion.component';
import { EditEducacionComponent } from './edit-educacion/edit-educacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadersModule } from '../loaders/loaders.module';



@NgModule({
  declarations: [
    EducacionComponent,
    EditEducacionComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    ReactiveFormsModule,
    LoadersModule,
  ],
  exports:[
    EducacionComponent,
    EditEducacionComponent
  ]
})
export class EducacionModule { }
