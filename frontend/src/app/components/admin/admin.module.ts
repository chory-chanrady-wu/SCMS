import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AdminComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AdminComponent,               // ✅ use import for standalone component
    UserManagementComponent       // ✅ use import for standalone component
  ]
})
export class AdminModule {}
