import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IHttpResponse, TrainingDTO } from '@core/models';
import { catchError, map, Observable } from 'rxjs';
import { TrainingsService } from './trainings.service';

@Injectable()
export class TrainingResolver implements Resolve<any>{

  constructor(
    private _trainingService: TrainingsService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'];
    return this._trainingService.getTraining(id)
      .pipe(map((res: any) => {
        return res.data
      }), catchError((err) => {
        return err
      }))

  }
}
