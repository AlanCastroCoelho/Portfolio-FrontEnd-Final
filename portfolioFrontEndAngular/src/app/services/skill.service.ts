import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Skill } from '../Models/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
    URL = 'https://portfolio-backend-final-fq0t.onrender.com/skill'; 
  /*URL = 'http://localhost:8080/skill';*/

  private _refres$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  get refresh$() {
    return this._refres$;
  }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.URL + `/detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/create', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.URL + `/update/${id}`, skill).pipe(
      tap(() => {
        this._refres$.next();
      })
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.URL + `/delete/${id}`);
  }
}
