import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { EditPersonaComponent } from './edit-persona/edit-persona.component';
import { EditRedComponent } from './edit-red/edit-red.component';
import { PersonaService } from 'src/app/services/persona.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../buttons/buttons.module';
import { LineBreakPipe } from 'src/app/pipes/line-break.pipe';
import { TitleSubtitleModule } from '../title-subtitle/title-subtitle.module';
import { EducacionModule } from '../educacion/educacion.module';
import { ExperienciaModule } from '../experiencia/experiencia.module';

@NgModule({
  declarations: [
    AboutMeComponent,
    EditPersonaComponent,
    EditRedComponent,
    LineBreakPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonsModule,
    TitleSubtitleModule,
    EducacionModule,
    ExperienciaModule
  ],providers:[
    PersonaService
  ],
  exports:[AboutMeComponent,
    EditPersonaComponent,
    EditRedComponent]
})
export class AboutMeModule { }
