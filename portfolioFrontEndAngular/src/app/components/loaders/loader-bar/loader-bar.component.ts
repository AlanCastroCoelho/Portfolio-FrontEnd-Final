import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-bar',
  templateUrl: './loader-bar.component.html',
  styleUrls: ['./loader-bar.component.css']
})
export class LoaderBarComponent {
@Input() tipoSkl:string;
@Input() tipo:string;
}
