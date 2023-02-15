import { NgModule } from '@angular/core';
import { MainComponent } from './index';

import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    HttpClientModule,
    MainRoutingModule,
    SharedModule
  ],
  
  exports:[
   HttpClientModule,
  ]
})
export class MainModule { }
