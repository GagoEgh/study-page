import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, } from '@views/index';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'main',
    loadChildren: () => import('@views/main/index').then(m => m.MainModule)
  },
  { path: '**', redirectTo: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
