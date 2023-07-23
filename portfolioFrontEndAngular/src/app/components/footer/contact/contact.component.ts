import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/Models/redes';
import { RedesServiceService } from 'src/app/services/redes-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.min.css'],
})
export class ContactComponent implements AfterViewInit {
  constructor(public redesS: RedesServiceService) {}
  redes: Redes[] = [];

  
  ngAfterViewInit(): void {
    this.cargarRedes();
  }

  cargarRedes(): void {
    this.redesS.lista().subscribe((data) => {
      this.redes = data;
    });
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } 
  }
}
