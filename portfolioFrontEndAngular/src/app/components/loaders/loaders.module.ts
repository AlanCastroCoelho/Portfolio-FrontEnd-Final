import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinLoadComponent } from './spin-load/spin-load.component';
import { LoaderTextComponent } from './loader-text/loader-text.component';



@NgModule({
  declarations: [
    SpinLoadComponent,
    LoaderTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SpinLoadComponent,
    LoaderTextComponent
  ]
})
export class LoadersModule { }
