import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingsComponent } from './trainings/trainings.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { TrainingsService } from './trainings.service';
import { TrainingComponent } from './training/training.component';
import { UpdateTrainingComponent } from './update-training/update-training.component';
import { TrainingResolver } from './training-resolver';

const routes: Routes = [
  { path: '', component: TrainingsComponent },
  {
    path: 'updateTrainig/:id',
    component: UpdateTrainingComponent,
    resolve:{id:TrainingResolver}
  }
];


@NgModule({
  declarations: [
    TrainingsComponent,
    TrainingComponent,
    UpdateTrainingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [TrainingsService, TrainingResolver]
})
export class TrainingsModule { }
