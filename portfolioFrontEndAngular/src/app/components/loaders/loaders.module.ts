import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderBarComponent } from './loader-bar/loader-bar.component';
import { SpinLoadComponent } from './spin-load/spin-load.component';
import { LoaderTextComponent } from './loader-text/loader-text.component';



@NgModule({
  declarations: [
    LoaderBarComponent,
    SpinLoadComponent,
    LoaderTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderBarComponent,
    SpinLoadComponent,
    LoaderTextComponent
  ]
})
export class LoadersModule { }
