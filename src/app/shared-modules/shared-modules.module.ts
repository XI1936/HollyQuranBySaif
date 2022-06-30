import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule,
    SidebarModule
  ],
  exports:[
    ButtonModule,
    TabViewModule,
    SidebarModule
  ]
})
export class SharedModulesModule { }
