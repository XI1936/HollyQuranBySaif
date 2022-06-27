import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule
  ],
  exports:[
    ButtonModule,
    TabViewModule
  ]
})
export class SharedModulesModule { }
