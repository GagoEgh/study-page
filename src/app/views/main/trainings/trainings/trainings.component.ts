
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IHttpResponse, TrainingDTO, trimRequiredValidator, } from '@core/index';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { map, Observable } from 'rxjs';
import { TrainingsService } from '../trainings.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingsComponent implements OnInit {

  trainings$ = new Observable<TrainingDTO[]>();
  trainingsForm!: FormGroup;

  constructor(
    private _trainingsService: TrainingsService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getTrainings();
    this.initForm();
  }

  getTrainings() {
    this.trainings$ = this._trainingsService.getTrainings()
      .pipe(map((res: IHttpResponse<TrainingDTO[]>) => {
        return res.data.reverse()
      }))
  }

  initForm() {
    this.trainingsForm = this._fb.group({
      name: ['', [trimRequiredValidator()]],
      description: ['', [trimRequiredValidator()]],
      type: ['', [trimRequiredValidator()]],
      image: ['', []],
      date: ['']
    })
  }

  handleChange(info: NzUploadChangeParam): void {
    const file = info.file.originFileObj;
    this.trainingsForm.get('image')?.setValue(file)
  }

  submitForm() {

    const date = new Date();
    const isoDate = date.toISOString();
    this.trainingsForm.get('date')?.setValue(isoDate);
    const training = this._trainingsService.createFormData(this.trainingsForm);
    if (this.trainingsForm.valid) {
      this.trainings$ = this._trainingsService.postTraining(training)
        .pipe(map((res: IHttpResponse<TrainingDTO[]>) => {
          return res.data.reverse()
        }))
    }
  }
}
