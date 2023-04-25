import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Educacion } from '../Models/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
baseUrl = environment.apiUrl + 'educacion';

  private _refres$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.baseUrl + '/lista');
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.baseUrl + `/detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/update/${id}`, educacion).pipe(
      tap(() => {
        this._refres$.next();
      })
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/delete/${id}`);
  }
}
