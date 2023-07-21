import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../Models/projects';

@Injectable()
export class ProjectsService {
  baseUrl = environment.apiUrl + 'proyectos';
 /* URL = 'http://localhost:8080/proyectos';*/

  private _refres$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Projects[]> {
    return this.httpClient.get<Projects[]>(this.baseUrl + '/lista');
  }

  public detail(id: number): Observable<Projects> {
    return this.httpClient.get<Projects>(this.baseUrl + `/detail/${id}`);
  }

  public save(projects: Projects): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/create', projects);
  }

  public update(id: number, projects: Projects): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/update/${id}`, projects).pipe(
      tap(() => {
        this._refres$.next();
      })
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/delete/${id}`);
  }
}
