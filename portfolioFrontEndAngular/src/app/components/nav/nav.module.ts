import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { TokenService } from 'src/app/services/token.service';
import { CargarScriptsService } from 'src/app/services/cargar-scripts.service';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent
  ],
  providers:[
    TokenService,
    CargarScriptsService
  ]
})
export class NavModule { }
