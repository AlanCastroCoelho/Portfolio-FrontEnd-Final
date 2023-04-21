import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Experiencia } from '../Models/experiencia';

@Injectable({
  providedIn: 'root',
})
export class SExperienciaService {
  expURL = 'https://portfolio-backend-final-fq0t.onrender.com/explab'; 
  /*expURL = 'http://localhost:8080/explab';*/

  private _refres$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + '/lista');
  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + `/detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expURL + '/create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient
      .put<any>(this.expURL + `/update/${id}`, experiencia)
      .pipe(
        tap(() => {
          this._refres$.next();
        })
      );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `/delete/${id}`);
  }
}
