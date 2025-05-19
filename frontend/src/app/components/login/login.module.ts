import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [], // Since LoginComponent is standalone, it's not declared here
})
export class LoginModule {}
// This module is for lazy loading the LoginComponent. The component itself is standalone and does not need to be declared in a module.