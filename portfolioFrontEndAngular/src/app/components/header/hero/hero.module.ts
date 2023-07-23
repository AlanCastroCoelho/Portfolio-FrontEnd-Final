import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaService } from 'src/app/services/persona.service';
import { HeroComponent } from './hero.component';
import { LoadersModule } from '../../loaders/loaders.module';



@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    LoadersModule
  ],
  exports:[HeroComponent],
  providers:[PersonaService]
})
export class HeroModule { }
