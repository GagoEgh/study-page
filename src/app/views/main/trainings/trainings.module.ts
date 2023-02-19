import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings/trainings.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { TrainingsService } from './trainings.service';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path: '', component: TrainingsComponent,
  },
];


@NgModule({
  declarations: [
    TrainingsComponent,
    TrainingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers:[TrainingsService]
})
export class TrainingsModule { }
