import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: "app-sidebar",
  template: `
    <aside class="sidebar">
      <nav>
        <ul class="sidebar-nav">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
        <button class="logout-btn" (click)="logout()">LOGOUT</button>
      </nav>
      
    </aside>
  `,
  styles: [`
    .sidebar {
      background-color: #03045E;
      color: #FFF;
      padding: 38px 34px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    .sidebar-nav {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    .sidebar-nav li {
      margin-bottom: 48px;
    }
    .sidebar-nav a {
      color: #FFF;
      text-decoration: none;
      font: 400 24px Inter, sans-serif;
    }
    .logout-btn {
      border-radius: 30px;
      background-color: #00B4D8;
      color: #000;
      border: none;
      padding: 7px 22px;
      font: 400 24px Inter, sans-serif;
      cursor: pointer;
    }
    @media (max-width: 991px) {
      .sidebar {
        padding: 20px;
      }
      .sidebar-nav li {
        margin-bottom: 20px;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class Sidebar {
  constructor(private keycloakService: KeycloakService) {}
  logout() {
    this.keycloakService.logout(window.location.origin);  
  }
}