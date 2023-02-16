import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { LoginComponent, } from '@views/index';


const routes: Routes = [
  { path: '' ,component: LoginComponent,pathMatch:'full' },
  {
    path: 'main',
    canActivate:[AuthGuard],
    loadChildren: () => import('@views/main/index').then(m => m.MainModule)
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
