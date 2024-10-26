import { Component } from '@angular/core';
import { KeycloakService } from "keycloak-angular";
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LandingPageComponent { 
  constructor(private keycloakService: KeycloakService, private router: Router) {}

  logout() {
    this.keycloakService.logout(window.location.origin);  // Redirects to homepage after logout
  }

  async dashboard() {
    // Ensure the user is logged in
    // After login, check roles
    // Navigate to the appropriate user role's dashboard
    const roles = this.keycloakService.getUserRoles();
    if (roles.includes('OfficeAssistant')) {
      this.router.navigate(['/office-assistant-dashboard']);
    } else if (roles.includes('Doctor')) {
      this.router.navigate(['/doctordashboard']);
    } else if (roles.includes('Patient')) {
      this.router.navigate(['/patientdashboard']);
    } else {
      this.router.navigate(['/']);
    }
    
  }

 
}
