
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ArtisticNavComponent } from './components/artistic-nav/artistic-nav.component';
import { AboutMeComponent } from './components/about-me/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { interceptorProvider } from './services/interceptor-service';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';

// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { RecargaDirective } from './directives/recarga.directive';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { ExperienciaComponent } from './components/experiencia/experiencia/experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/experiencia/edit-experiencia/edit-experiencia/edit-experiencia.component';
import { EditProjectsComponent } from './components/projects/edit-projects/edit-projects.component';

// INICIO Servicios
import { CargarScriptsService } from './services/cargar-scripts.service';
import { ShowProjectComponent } from './components/projects/show-project/show-project.component';
import { ItemPrjectComponent } from './components/projects/item-prject/item-prject.component';
import { EditRedComponent } from './components/about-me/edit-red/edit-red.component';
import { EditPersonaComponent } from './components/about-me/edit-persona/edit-persona.component';
import { BttnAddComponent } from './components/buttons/bttn-add/bttn-add.component';
import { BttnEditDelComponent } from './components/buttons/bttn-edit-del/bttn-edit-del.component';
import { SkillListItemsComponent } from './components/skills/skill-list-items/skill-list-items.component';
import { SkillImageContComponent } from './components/skills/skill-image-cont/skill-image-cont.component';
import { TitleSubtitleComponent } from './components/title-subtitle/title-subtitle.component';
import { LineBreakPipe } from './pipes/line-break.pipe';
//FIN Servicios

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    ArtisticNavComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    LogInComponent,
    PortfolioComponent,
    EducacionComponent,
    EditEducacionComponent,
    RecargaDirective,
    EditSkillComponent,
    ExperienciaComponent,
    EditExperienciaComponent,
    EditProjectsComponent,
    ShowProjectComponent,
    ItemPrjectComponent,
    EditRedComponent,
    EditPersonaComponent,
    BttnAddComponent,
    BttnEditDelComponent,
    SkillListItemsComponent,
    SkillImageContComponent,
    TitleSubtitleComponent,
    LineBreakPipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [interceptorProvider, CargarScriptsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
