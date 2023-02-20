import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VacanciesDTO } from '@core/models';
import { trimRequiredValidator } from '@core/validators';
import { catchError, map, Observable, of } from 'rxjs';
import { VacanciesService } from '../vacancies.service';

@Component({
  selector: 'app-updatevacancie',
  templateUrl: './updatevacancie.component.html',
  styleUrls: ['./updatevacancie.component.css']
})
export class UpdatevacancieComponent implements OnInit {
  updateVacancie$ = new Observable<string>();
  vacancieForm!: FormGroup;
  vacancie!: VacanciesDTO;
  isSuccess!: boolean;
  constructor(
    private vacanciesService: VacanciesService,
    private _fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _router:Router
    ) { }

  ngOnInit(): void {
    this.vacancie = this.activatedRoute.snapshot.data['id'];
    this.initForm();
  }


  initForm() {
    this.vacancieForm = this._fb.group({
      description: [this.vacancie.description, [trimRequiredValidator()]],
      shortDescription: [this.vacancie.shortDescription, [trimRequiredValidator()]],

    })
  }

  delete() {
    return this.vacanciesService.delete(this.vacancie.id!)
    .subscribe({
      next:()=>{
        this._router.navigate(['main','vacancies'])
      }
    })
  }

  goto(){
    this._router.navigate(['main','vacancies'])
  }
  submitForm() {
    if (this.vacancieForm.valid) {
      const vacancieDTO = new VacanciesDTO(this.vacancieForm);
      this.updateVacancie$ = this.vacanciesService.update(this.vacancie.id!, vacancieDTO)
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
