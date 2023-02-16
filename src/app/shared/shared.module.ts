import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';



@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCollapseModule,
    NzIconModule,
    NzMenuModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzMessageModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCollapseModule,
    NzIconModule,
    NzMenuModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzMessageModule
  ]
})
export class SharedModule { }
