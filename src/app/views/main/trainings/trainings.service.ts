import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IHttpResponse, TrainingDTO, } from '@core/models';
import { Observable } from 'rxjs';

@Injectable()
export class TrainingsService {

  constructor(
    private _http: HttpClient
  ) { }

  getTrainings(): Observable<IHttpResponse<TrainingDTO[]>> {
    return this._http.get<IHttpResponse<TrainingDTO[]>>('/trainings')
  }

  postTraining(body: FormData) {
    return this._http.post('/trainings', body)
  }

  createFormData(form: FormGroup) {
 
    let formData = new FormData();
    formData.append('name', form.get('name')?.value);
    formData.append('description', form.get('description')?.value);
    formData.append('date', form.get('date')?.value);
    formData.append('type', form.get('type')?.value);
    formData.append('image', form.get('image')?.value,form.get('image')?.value.name);

    return formData
  }

}
