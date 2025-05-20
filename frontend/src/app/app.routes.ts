import { Routes } from '@angular/router';
import { RoleGuard } from './auth/role.guard';

export const routes: Routes = [
  {
    path: 'admin/users',
    loadComponent: () =>
      import('./components/admin/user-management/user-management.component').then(m => m.UserManagementComponent),
    canActivate: [RoleGuard],
    data: { roles: ['Admin'] }
  }
];