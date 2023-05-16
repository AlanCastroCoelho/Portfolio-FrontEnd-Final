import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/Models/redes';
import { RedesServiceService } from 'src/app/services/redes-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(public redesS: RedesServiceService) {}
  redes: Redes[] = [];

  
  ngOnInit(): void {
    this.cargarRedes();
  }

  cargarRedes(): void {
    this.redesS.lista().subscribe((data) => {
      this.redes = data;
    });
  }
}
