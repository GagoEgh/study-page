import { NgModule } from '@angular/core';
import { LoginComponent, RegisterComponent } from './index';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'register',component:RegisterComponent},
 
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  
  ]
})
export class AuthModule { }
