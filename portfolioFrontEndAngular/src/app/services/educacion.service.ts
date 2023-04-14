import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Educacion } from '../Models/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  /* URL = 'https://backendalancc.onrender.com/educacion'; */
  URL = 'http://localhost:8080/educacion';

  private _refres$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.URL + `/detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.URL + `/update/${id}`, educacion).pipe(
      tap(() => {
        this._refres$.next();
      })
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
