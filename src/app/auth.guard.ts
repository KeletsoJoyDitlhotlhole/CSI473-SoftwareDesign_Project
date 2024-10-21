import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { KeycloakOperationService } from './keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private keycloakService: KeycloakOperationService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // Check if the user is logged in
    const isLoggedIn = await this.keycloakService.isLoggedIn();
    
    if (!isLoggedIn) {
      this.router.navigate(['/']); // Redirect to landing page if not logged in
      return false;
    }

    // Retrieve the user's roles
    const userRoles = this.keycloakService.getUserRoles();
    const requiredRoles = next.data['roles']; // e.g., ['admin']

    // Check if the user has the required roles
    const hasRole = requiredRoles.some((role: string) => userRoles.includes(role));

    if (!hasRole) {
      this.router.navigate(['/']); // Redirect to landing page if not authorized
      return false;
    }

    // Allow access if the user has the correct role
    return true;
  }
}
