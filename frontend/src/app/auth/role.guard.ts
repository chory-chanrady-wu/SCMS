import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    // 🎯 Role-specific access logic
    const url = state.url;

    if (url.startsWith('/admin') && role !== 'admin') {
      this.router.navigate(['/home']);
      return false;
    }

    if (url.startsWith('/student') && role !== 'student') {
      this.router.navigate(['/home']);
      return false;
    }

    if (url.startsWith('/faculty') && role !== 'faculty') {
      this.router.navigate(['/home']);
      return false;
    }

    return true; // access allowed
  }
}
