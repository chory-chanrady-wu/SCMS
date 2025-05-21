import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['roles'] as string[];
    const currentRole = localStorage.getItem('role');

    if (expectedRoles.includes(currentRole!)) {
      return true;
    }

    // Optional: Redirect to home
    this.router.navigate(['/home']);
    return false;
  }
}
