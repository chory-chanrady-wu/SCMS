import { Routes } from '@angular/router';
import { RoleGuard } from './auth/role.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
  path: 'profile',
  loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent)
  }
,
  {
    path: 'admin',
    canActivate: [RoleGuard],
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'student',
    canActivate: [RoleGuard],
    loadChildren: () => import('./components/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'faculty',
    canActivate: [RoleGuard],
    loadChildren: () => import('./components/faculty/faculty.module').then(m => m.FacultyModule)
  }

];
