import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Persona } from '../Models/persona';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  baseUrl = environment.apiUrl + 'persona';
 /*URL = 'http://localhost:8080/persona';*/

 private _refres$ = new Subject<void>();


  constructor(private httpClient: HttpClient) {}

 get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.baseUrl + '/lista');
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.baseUrl + `/detail/${id}`);
  }

  public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/create', persona);
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/update/${id}`, persona).pipe(
      tap(() => {
        this._refres$.next();
      })
    );
  }
/*
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }*/
}
