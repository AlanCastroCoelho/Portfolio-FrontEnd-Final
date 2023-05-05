import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-loader-text',
  templateUrl: './loader-text.component.html',
  styleUrls: ['./loader-text.component.css']
})
export class LoaderTextComponent {
@Input() tipo:string;
}
