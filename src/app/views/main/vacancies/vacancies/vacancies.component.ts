import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IHttpResponse, VacanciesDTO } from '@core/models';
import { trimRequiredValidator } from '@core/validators';
import { map, Observable } from 'rxjs';
import { VacanciesService } from '../vacancies.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  vacancies$ = new Observable<VacanciesDTO[]>();
  vacancieForm!: FormGroup
  constructor(
    private vacanciesService: VacanciesService,
    private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.getvacancies()
    this.initForm()
  }

  getvacancies() {
    this.vacancies$ = this.vacanciesService.getVacancies()
     
  }

  initForm() {
    this.vacancieForm = this._fb.group({
      description: ['', [trimRequiredValidator()]],
      shortDescription: ['', [trimRequiredValidator()]],

    })
  }

  submitForm() {

    if (this.vacancieForm.valid) {
      const vacancieDTO = new VacanciesDTO(this.vacancieForm)
      this.vacancies$= this.vacanciesService.postVacancie(vacancieDTO)
      this.vacancieForm.reset({
        description:'',
        shortDescription:''
      })
    }
  }
}
