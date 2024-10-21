import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({ providedIn: 'root' })
export class KeycloakOperationService {
  constructor(private readonly keycloak: KeycloakService) {}

  isLoggedIn(): boolean {
    return this.keycloak.isLoggedIn();
  }

  logout(): void {
    this.keycloak.logout();
  }

  getUserProfile(): Promise<any> {
    return this.keycloak.loadUserProfile();
  }

  // New method to get the user's roles
  getUserRoles(): string[] {
    const keycloakInstance = this.keycloak.getKeycloakInstance();
    const tokenParsed = keycloakInstance.tokenParsed;
    
    if (tokenParsed && tokenParsed.realm_access && tokenParsed.realm_access.roles) {
      return tokenParsed.realm_access.roles; // Get the realm roles
    }
    
    return [];
  }
}
