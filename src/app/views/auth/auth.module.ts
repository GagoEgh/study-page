import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, RegisterComponent } from './index';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NzIconModule } from 'ng-zorro-antd/icon';;
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { RouterModule, Routes } from '@angular/router';
import { NzSelectModule } from 'ng-zorro-antd/select';
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
    CommonModule,
    FormsModule,
    HttpClientModule,  
    ReactiveFormsModule,
    RouterModule,

    NzIconModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzMessageModule,
    NzSelectModule
  ]
})
export class AuthModule { }
