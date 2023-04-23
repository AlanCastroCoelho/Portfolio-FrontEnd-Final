import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/experiencia/edit-experiencia/edit-experiencia/edit-experiencia.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditProjectsComponent } from './components/projects/edit-projects/edit-projects.component';
import { EditSkillComponent } from './components/skills/edit-skill/edit-skill.component';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LogInComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
