import { Component, Input } from '@angular/core';
import { VacanciesDTO } from '@core/models';

@Component({
  selector: 'app-vacnacie',
  templateUrl: './vacnacie.component.html',
  styleUrls: ['./vacnacie.component.css']
})
export class VacnacieComponent {
  @Input()vacancie!:VacanciesDTO

}
