import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Redes } from '../Models/redes';

@Injectable({
  providedIn: 'root'
})
export class RedesServiceService {

  /* URL = 'https://backendalancc.onrender.com/redes'; */
  URL = 'http://localhost:8080/redes';

  private _refres$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Redes[]> {
    return this.httpClient.get<Redes[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Redes> {
    return this.httpClient.get<Redes>(this.URL + `/detail/${id}`);
  }

  public save(redes: Redes): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/create', redes);
  }

  public update(id: number, redes: Redes): Observable<any> {
    return this.httpClient.put<any>(this.URL + `/update/${id}`, redes).pipe(
      tap(() => {
        this._refres$.next();
      })
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}