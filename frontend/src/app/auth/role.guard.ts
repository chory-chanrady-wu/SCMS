import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const allowedRoles: string[] = route.data['roles'] || [];
    const userRole = localStorage.getItem('role');

    if (!userRole) return this.router.parseUrl('/login');

    if (allowedRoles.length === 0 || allowedRoles.includes(userRole) || userRole === 'admin') {
      return true;
    }

    // Block access and redirect
    return this.router.parseUrl('/home');
  }
}
