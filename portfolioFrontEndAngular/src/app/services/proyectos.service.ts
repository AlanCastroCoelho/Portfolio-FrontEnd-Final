import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

import { Proyectos } from '../Models/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  /* URL = 'https://backendalancc.onrender.com/proyectos'; */
  URL = 'http://localhost:8080/proyectos';

  private _refres$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Proyectos[]> {
    return this.httpClient.get<Proyectos[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.URL + `/detail/${id}`);
  }

  public save(proyectos: Proyectos): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/create', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.URL + `/update/${id}`, proyectos).pipe(
      tap(() => {
        this._refres$.next();
      })
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
