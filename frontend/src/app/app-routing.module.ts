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
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
  },
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
    loadComponent: () => import('./components/faculty/faculty.component').then(m => m.FacultyComponent)
  },
  {
  path: 'room-booking',
  canActivate: [RoleGuard],
  data: { roles: ['admin', 'faculty'] },
  loadComponent: () => import('./components/room-booking/room-booking.component').then(m => m.RoomBookingComponent)
  }
  // Add more routes as needed
];
