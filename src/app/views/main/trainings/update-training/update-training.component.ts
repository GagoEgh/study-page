import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingDTO } from '@core/models';
import { trimRequiredValidator } from '@core/validators';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { catchError, map, Observable, of, pipe } from 'rxjs';
import { TrainingsService } from '../trainings.service';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css']
})
export class UpdateTrainingComponent implements OnInit {
  updateTraining$ = new Observable<string>();
  trainingForm!: FormGroup;
  training!: TrainingDTO;
  isSuccess!: boolean;
  constructor(
    private _trainingsService: TrainingsService,
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.training = this._activatedRoute.snapshot.data['id'];
    this.initForm();
  }

  initForm() {
    this.trainingForm = this._fb.group({
      name: [this.training.name, [trimRequiredValidator()]],
      description: [this.training.description, [trimRequiredValidator()]],
      type: [this.training.type, [trimRequiredValidator()]],
      image: ['', [Validators.required]],
      date: ['']
    })
  }

  handleChange(info: NzUploadChangeParam): void {
    const file = info.file.originFileObj;
    this.trainingForm.get('image')?.setValue(file)
  }

  delte(){
    this._trainingsService.delete(this.training.id!)
    .subscribe({
      next:()=>{
        this.router.navigate(['main','trainings'])
      }
    })
  }

  goto(){
    this.router.navigate(['main','trainings'])
  }
  
  submitForm() {
    if (this.trainingForm.valid) {


      const date = new Date();
      const isoDate = date.toISOString();
      this.trainingForm.get('date')?.setValue(isoDate);
      const training = this._trainingsService.createFormData(this.trainingForm);

      this.updateTraining$ = this._trainingsService.update(this.training.id!, training)
        .pipe(map(() => {
          this.isSuccess = true;
          return 'update is successful'
        }),
          catchError(() => {
            this.isSuccess = false;
            return of('update is not available')
          })
        )
    }

  }

}
