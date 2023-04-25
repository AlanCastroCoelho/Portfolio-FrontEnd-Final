import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../Models/experiencia';

@Injectable({
  providedIn: 'root',
})
export class SExperienciaService {
  baseUrl = environment.apiUrl + 'explab';
  /*expURL = 'http://localhost:8080/explab';*/

  private _refres$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.baseUrl + '/lista');
  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.baseUrl + `/detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient
      .put<any>(this.baseUrl + `/update/${id}`, experiencia)
      .pipe(
        tap(() => {
          this._refres$.next();
        })
      );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/delete/${id}`);
  }
}
