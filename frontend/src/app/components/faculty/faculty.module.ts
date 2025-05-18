import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty.component';

const routes: Routes = [
  { path: '', component: FacultyComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FacultyComponent
  ]
})
export class FacultyModule { }
