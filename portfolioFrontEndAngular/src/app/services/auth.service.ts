import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../Models/jwt-dto';
import { LoginUsuario } from '../Models/login-usuario';
import { NuevoUsuario } from '../Models/nuevo-usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'https://portfolio-backend-final-fq0t.onrender.com/auth';
  /*  authURL = 'http://localhost:8080/auth';*/

  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + '/login', loginUsuario);
  }
}
