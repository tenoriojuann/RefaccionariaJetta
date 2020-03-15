import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path: 'inicio',
    component: LandingComponent
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
