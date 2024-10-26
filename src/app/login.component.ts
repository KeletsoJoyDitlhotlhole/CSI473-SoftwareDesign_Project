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
    
    const isLoggedIn = await this.keycloakService.isLoggedIn();

    if (!isLoggedIn) {
      
      await this.keycloakService.login();
      await this.redirectBasedOnRole
    } else {
      
      await this.redirectBasedOnRole();
    }
  }

  private async redirectBasedOnRole() {
    
    const userProfile = await this.keycloakService.loadUserProfile();
    const roles = await this.keycloakService.getUserRoles(); 

    console.log('Roles:', roles); 

    if (roles.includes('Patient')) {
      this.router.navigate(['/patientdashboard']);
    } else if (roles.includes('Doctor')) {
      this.router.navigate(['/doctordashboard']);
    } else if (roles.includes('Office_assistant')) {
      this.router.navigate(['/office-assistant-dashboard']);
    } else {
  
      this.router.navigate(['/not-authorized']);
    }
  }
}
