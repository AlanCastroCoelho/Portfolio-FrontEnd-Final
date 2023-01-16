
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ArtisticNavComponent } from './components/artistic-nav/artistic-nav.component';
import { AboutMeComponent } from './components/about-me/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
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

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { RecargaDirective } from './directives/recarga.directive';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';
import { ExperienciaComponent } from './components/experiencia/experiencia/experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/experiencia/edit-experiencia/edit-experiencia/edit-experiencia.component';
import { EditProyectsComponent } from './components/proyects/edit-proyects/edit-proyects.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    ArtisticNavComponent,
    AboutMeComponent,
    SkillsComponent,
    ProyectsComponent,
    ContactComponent,
    AboutMeComponent,
    LogInComponent,
    PortfolioComponent,
    EducacionComponent,
    EditEducacionComponent,
    RecargaDirective,
    EditSkillComponent,
    ExperienciaComponent,
    EditExperienciaComponent,
    EditProyectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
