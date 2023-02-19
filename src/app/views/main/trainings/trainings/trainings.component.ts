import { DatePipe } from '@angular/common';
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
        console.log(res.data)
        return res.data
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

  updateFile(event: Event) {
    const file = (event.target as HTMLInputElement).files![0]
    console.log(file);
    this.trainingsForm.get('image')?.setValue(file)

  }

  handleChange(info: NzUploadChangeParam): void {

    const file = info.file.originFileObj;
    console.log(file);
    this.trainingsForm.get('image')?.setValue(file)
  }
  submitForm() {

    //   YYYY-MM-DDThh:mm:ssTZD
    const date = new Date();

    const isoDate =  date.toISOString();
    console.log('iso',isoDate)
    // const datePipe = new DatePipe('en-US');
    // const newDate = datePipe.transform(isoDate, 'YYYY-MM-DDThh:mm:ssTZD');
    // console.log(newDate)
    this.trainingsForm.get('date')?.setValue(isoDate);

    const training = this._trainingsService.createFormData(this.trainingsForm);


    this._trainingsService.postTraining(training)
      .subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        }
      })

  }
}
