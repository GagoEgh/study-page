import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IHttpResponse, VacanciesDTO } from '@core/models';
import { map } from 'rxjs';
import { VacanciesService } from './vacancies.service';

@Injectable()
export class VacancieResolve implements Resolve<any>{

  constructor(
    private _vacanciesServices: VacanciesService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = +route.paramMap.get('id')!;
    return this._vacanciesServices.getVacancies()
      .pipe(
        map((res: VacanciesDTO[]) => {
          return res.find((vacanci: VacanciesDTO) => {
            return vacanci.id === id
          })
        }))
  }
}
