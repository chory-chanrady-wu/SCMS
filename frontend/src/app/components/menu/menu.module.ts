import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MenuComponent
  ]
})
export class MenuModule { }
// This module defines a MenuModule that imports CommonModule and RouterModule.
// It declares a MenuComponent and sets up a route for it.