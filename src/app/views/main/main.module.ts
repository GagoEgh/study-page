import { NgModule } from '@angular/core';
import { MainComponent, } from './index';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '@shared/shared.module';
import { UserComponent } from './user/user.component';





@NgModule({
  declarations: [
    MainComponent,

    UserComponent,
  ],
  imports: [
    MainRoutingModule,
    SharedModule
  ],


})
export class MainModule { }
