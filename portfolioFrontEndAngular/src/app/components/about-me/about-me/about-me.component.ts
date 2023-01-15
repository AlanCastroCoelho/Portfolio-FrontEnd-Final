import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  persona: Persona = new Persona("","","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
