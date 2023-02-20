import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',loadChildren:()=>import('./index').then(m=>m.DashboardModule)},
      {path:'trainings',loadChildren:()=>import('./index').then(m=>m.TrainingsModule)},
      {path:'vacancies',loadChildren:()=>import('./index').then(m=>m.VacanciesModule)},
      { path: 'user', component: UserComponent },
    ]
  },


];


@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
