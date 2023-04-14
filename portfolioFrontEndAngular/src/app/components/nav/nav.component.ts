import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { CargarScriptsService } from './../../services/cargar-scripts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isLogged = false;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private _CargarScripts: CargarScriptsService
  ) {
    _CargarScripts.Carga(['Efecto Letras/javascript']);
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
