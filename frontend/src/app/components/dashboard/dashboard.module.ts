import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
// This module is responsible for the dashboard feature of the application. It imports necessary Angular modules and declares the DashboardComponent.
// The RouterModule is configured with a route that points to the DashboardComponent, allowing for lazy loading of the component when the user navigates to the dashboard path.

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardComponent
  ]
})
export class DashboardModule { }
