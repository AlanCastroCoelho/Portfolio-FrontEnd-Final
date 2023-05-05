import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSubtitleComponent } from './title-subtitle.component';



@NgModule({
  declarations: [
    TitleSubtitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TitleSubtitleComponent
  ]
})
export class TitleSubtitleModule { }
