import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', component: StudentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StudentComponent
  ]
})
export class StudentModule { }
