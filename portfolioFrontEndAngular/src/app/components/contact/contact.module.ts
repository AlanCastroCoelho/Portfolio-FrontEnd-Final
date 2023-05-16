import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSubtitleModule } from '../title-subtitle/title-subtitle.module';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    TitleSubtitleModule,
  ],
  exports:[
ContactComponent
  ]
})
export class ContactModule { }
