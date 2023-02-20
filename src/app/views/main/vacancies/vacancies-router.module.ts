import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { UpdatevacancieComponent } from './updatevacancie/updatevacancie.component';
import { VacancieResolve } from './vacancie-resolver';

const routes: Routes = [
  { path: '', component: VacanciesComponent },
  {
    path: 'updateVacancie/:id',
    component: UpdatevacancieComponent,
    resolve: {id:VacancieResolve}
  }

];


@NgModule({

  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class VacanciesRouterModule { }
