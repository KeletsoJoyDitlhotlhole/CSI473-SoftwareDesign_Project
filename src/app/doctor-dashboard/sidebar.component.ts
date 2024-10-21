import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: "app-sidebar",
  template: `
    <aside class="sidebar">
      <nav>
        <a href="#" class="nav-link">Profile</a>
        <a href="#" class="nav-link">Settings</a>
      </nav>
      <button class="logout-btn" (click)="logout()">LOGOUT</button>
    </aside>
  `,
  styles: [`
    .sidebar {
      background-color: rgba(6, 46, 20, 0.91);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      align-items: flex-start;
      color: #fff;
      padding: 38px 34px;
    }
    .nav-link {
      color: #fff;
      text-decoration: none;
      margin-bottom: 48px;
      font: 400 24px Inter, sans-serif;
    }
    .logout-btn {
      border-radius: 30px;
      background-color: #00b4d8;
      color: #000;
      margin-top: 568px;
      padding: 7px 22px;
      border: none;
      cursor: pointer;
      font: 400 24px Inter, sans-serif;
    }
    @media (max-width: 991px) {
      .sidebar {
        padding: 20px;
      }
      .nav-link {
        margin-bottom: 20px;
      }
      .logout-btn {
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