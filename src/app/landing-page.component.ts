import { Component } from '@angular/core';
import { KeycloakService } from "keycloak-angular";
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LandingPageComponent { 
  constructor(private keycloakService: KeycloakService) {}

  login() {
    this.keycloakService.login({
      redirectUri: window.location.origin  // Redirects to homepage after successful login
    });  // Redirects to homepage after logout
  }
}
