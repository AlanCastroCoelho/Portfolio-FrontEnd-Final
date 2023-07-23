import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '../../buttons/buttons.module';
import { EducacionComponent } from './educacion.component';
import { EditEducacionComponent } from './edit-educacion/edit-educacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';

@NgModule({
  declarations: [
    EducacionComponent,
    EditEducacionComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    ReactiveFormsModule,
  ],
  exports:[
    EducacionComponent,
    EditEducacionComponent
  ],
  providers:[
    EducacionService
  ]
})
export class EducacionModule { }
