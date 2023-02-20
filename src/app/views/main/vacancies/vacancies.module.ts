import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { VacanciesRouterModule } from './vacancies-router.module';
import { VacanciesService } from './vacancies.service';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacnacieComponent } from './vacnacie/vacnacie.component';
import { HtmlElementDirective } from './html-element.directive';
import { UpdatevacancieComponent } from './updatevacancie/updatevacancie.component';
import { VacancieResolve } from './vacancie-resolver';



@NgModule({
  declarations: [
    VacanciesComponent,
    VacnacieComponent,
    HtmlElementDirective,
    UpdatevacancieComponent
  ],
  imports: [
    VacanciesRouterModule,
    SharedModule,
  ],
  providers:[VacanciesService,VacancieResolve]
})
export class VacanciesModule { }
