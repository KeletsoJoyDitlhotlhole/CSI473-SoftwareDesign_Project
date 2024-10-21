import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: "app-sidebar",
  template: `
    <aside class="sidebar">
      <nav>
        <a href="#profile" class="nav-item">Profile</a>
        <a href="#settings" class="nav-item">Settings</a>
      </nav>
      <button class="logout-button" (click)="logout()">LOGOUT</button>
    </aside>
  `,
  styles: [`
    .sidebar {
      background-color: rgba(37, 63, 46, 0.91);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #FFF;
      padding: 38px 34px;
    }
    .nav-item {
      display: block;
      color: inherit;
      text-decoration: none;
      margin-bottom: 48px;
    }
    .logout-button {
      border-radius: 30px;
      background-color: #00B4D8;
      color: #000;
      border: none;
      padding: 7px 22px;
      font: inherit;
      cursor: pointer;
      margin-top: auto;
    }
    @media (max-width: 991px) {
      .sidebar {
        padding: 20px;
      }
      .nav-item {
        margin-bottom: 40px;
      }
      .logout-button {
        margin-top: 40px;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class Sidebar {
  constructor(private keycloakService: KeycloakService) {}

  // Method to log out of Keycloak
  logout() {
    this.keycloakService.logout(window.location.origin);  // Redirects to homepage after logout
  }
  
}