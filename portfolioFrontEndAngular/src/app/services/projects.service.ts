import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

import { Projects } from '../Models/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  /* URL = 'https://backendalancc.onrender.com/proyectos'; */
  URL = 'http://localhost:8080/proyectos';

  private _refres$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Projects[]> {
    return this.httpClient.get<Projects[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Projects> {
    return this.httpClient.get<Projects>(this.URL + `/detail/${id}`);
  }

  public save(projects: Projects): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/create', projects);
  }

  public update(id: number, projects: Projects): Observable<any> {
    return this.httpClient.put<any>(this.URL + `/update/${id}`, projects).pipe(
      tap(() => {
        this._refres$.next();
      })
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
