import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { PageviewComponent } from './components/pageview/pageview.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"page", component:PageviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
