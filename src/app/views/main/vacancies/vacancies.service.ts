import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpResponse, VacanciesDTO } from '@core/models';
import { map, Observable, switchMap } from 'rxjs';

@Injectable()
export class VacanciesService {

  constructor(
    private _http: HttpClient
  ) { }

  postVacancie(body: any) {
    return this._http.post('/vacancies', body)
      .pipe(switchMap(() => {
        return this.getVacancies()
      }))
  }

  getVacancies(): Observable<VacanciesDTO[]> {
    return this._http.get<IHttpResponse<VacanciesDTO[]>>('/vacancies')
    .pipe(map((res:IHttpResponse<VacanciesDTO[]>) => {
      return res.data
    }))
  }

  update(id:number,body:VacanciesDTO){
    return this._http.put(`/vacancies/${id}`,body)
  }

  delete(id:number){
    return this._http.delete(`/vacancies/${id}`)
  }
}
