import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Skill } from '../Models/skill';

@Injectable()
export class SkillService {
  baseUrl = environment.apiUrl + 'skill';
 /* URL = 'http://localhost:8080/skill';*/

  private _refres$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.baseUrl + '/lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.baseUrl + `/detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/create', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/update/${id}`, skill).pipe(
      tap(() => {
        this._refres$.next();
      })
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + `/delete/${id}`);
  }
}
