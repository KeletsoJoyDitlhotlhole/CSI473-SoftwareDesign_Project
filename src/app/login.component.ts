import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private keycloakService: KeycloakService, private router: Router) {}

  async ngOnInit() {
    // Check if the user is logged in
    const isLoggedIn = await this.keycloakService.isLoggedIn();

    if (!isLoggedIn) {
      // If the user is not logged in, initiate the Keycloak login
      await this.keycloakService.login();
      await this.redirectBasedOnRole
    } else {
      // After login, check roles and redirect based on roles
      await this.redirectBasedOnRole();
    }
  }

  private async redirectBasedOnRole() {
    // Load user profile and roles
    const userProfile = await this.keycloakService.loadUserProfile();
    const roles = await this.keycloakService.getUserRoles(); // Ensure you're fetching roles

    console.log('Roles:', roles); 

    if (roles.includes('Patient')) {
      this.router.navigate(['/patientdashboard']);
    } else if (roles.includes('Doctor')) {
      this.router.navigate(['/doctordashboard']);
    } else if (roles.includes('Office_assistant')) {
      this.router.navigate(['/office-assistant-dashboard']);
    } else {
      // If no known roles, go to a generic page or not-authorized
      this.router.navigate(['/not-authorized']);
    }
  }
}
