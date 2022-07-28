import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModulesModule } from './shared-modules/shared-modules.module';
import { TopnavComponent } from './components/topnav/topnav.component';
import { HomeComponent } from './dashboard/home/home.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';
import { PageviewComponent } from './components/pageview/pageview.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HomeComponent,
    MainContentComponent,
    PageviewComponent,
    PageHeadingComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModulesModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
