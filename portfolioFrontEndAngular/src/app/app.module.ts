import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { interceptorProvider } from './services/interceptor-service';
import { LoadersModule } from './components/loaders/loaders.module';
// ngBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { RecargaDirective } from './directives/recarga.directive';

// INICIO Servicios
import { SkillModule } from './components/skill/skill.module';
import { ProjectsModule } from './components/projects/projects.module';
import { AboutMeModule } from './components/about-me/about-me.module';
import { EducacionModule } from './components/educacion/educacion.module';
import { ExperienciaModule } from './components/experiencia/experiencia.module';
import { LogInModule } from './components/log-in/log-in.module';
import { NavModule } from './components/nav/nav.module';
import { ContactModule } from './components/contact/contact.module';
import { HeroModule } from './components/hero/hero.module';

//FIN Servicios


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    RecargaDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    HeroModule,
    LoadersModule,
    SkillModule,
    ProjectsModule,
    AboutMeModule,
    EducacionModule,
    ExperienciaModule,
    LogInModule,
    NavModule,
    ContactModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
