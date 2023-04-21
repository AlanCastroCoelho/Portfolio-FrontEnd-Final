import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Persona } from '../Models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'https://portfolio-backend-final-fq0t.onrender.com/persona'; 
 /* URL = 'http://localhost:8080/persona';*/

 private _refres$ = new Subject<void>();


  constructor(private httpClient: HttpClient) {}

 get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `/detail/${id}`);
  }

  public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/create', persona);
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + `/update/${id}`, persona).pipe(
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
