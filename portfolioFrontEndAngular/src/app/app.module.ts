import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ArtisticNavComponent } from './components/artistic-nav/artistic-nav.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './components/about-me/Professional/Education/education.component';
import { EducationEditComponent } from './components/about-me/Professional/Education/education-edit/education-edit.component';
import { EducationAddItemComponent } from './components/about-me/Professional/Education/education-add-item/education-add-item.component';
import { EducationItemComponent } from './components/about-me/Professional/Education/education-item/education-item.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';



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
    EducationComponent,
    EducationEditComponent,
    EducationAddItemComponent,
    EducationItemComponent,
    LogInComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
