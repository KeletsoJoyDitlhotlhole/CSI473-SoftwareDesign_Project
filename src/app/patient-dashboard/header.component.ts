import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  template: `
    <header class="header-container">
      <div class="header-content">
        <div class="logo-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f57fc796a0a917f15a7f0ca841742546d6aa6295003d995c499995bf9b52b472?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c"
            alt="Medisafe Private Clinic Logo"
            class="logo-image"
          />
          <h1 class="clinic-name">MEDISAFE PRIVATE CLINIC</h1>
        </div>
        <div class="user-profile">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c8ee9cff1836e4ee0e6d980eaa840870f3f564563e19eeec62e5c3ef155d59?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c"
            alt="User profile picture"
            class="profile-image"
          />
          <span class="user-name">John Doe</span>
        </div>
      </div>
      <nav class="navigation">
        <div class="nav-indicator"></div>
        <div class="nav-dropdown">
          <button class="nav-link dropdown-toggle">Appointments <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c"
            alt=""
            class="nav-icon"
          /></button>
          <div class="dropdown-menu">
            <a href="/bookappt" class="dropdown-item">Make Appointment</a>
            <a href="/viewappt-patient" class="dropdown-item">View Appointment</a>
            <a href="#postpone" class="dropdown-item">Postpone Appointment</a>
            <a href="#cancel" class="dropdown-item">Cancel Appointment</a>
          </div>
        </div>
        <a href="#payments" class="nav-link">
          Payments
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c"
            alt=""
            class="nav-icon"
          />
        </a>
      </nav>
    </header>
  `,
  styles: [`
    .header-container {
      background-color: #8DC3DF;
      padding: 24px 58px 10px 17px;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo-section {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .logo-image {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
    .clinic-name {
      color: #000;
      font: 800 60px Inter, sans-serif;
    }
    .user-profile {
      display: flex;
      align-items: center;
      gap: 19px;
      color: #000;
      font: 400 24px Inter, sans-serif;
    }
    .profile-image {
      width: 78px;
      height: 78px;
      object-fit: contain;
    }
    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
      color: #000;
      font: 700 36px Inter, sans-serif;
    }
    .nav-indicator {
      background-color: #CBF3F0;
      width: 47px;
      height: 30px;
    }
    .nav-dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-toggle {
      background: transparent;
      border: none;
      color: inherit;
      font: inherit;
      cursor: pointer;
      position: relative;
    }
    .dropdown-menu {
      display: none;
      position: absolute;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      border-radius: 10px;
      min-width: 200px; /* Optional: Set a minimum width for the dropdown */
    }
    .nav-dropdown:hover .dropdown-menu {
      display: block;
    }
    .dropdown-item {
      color: inherit;
      text-decoration: none;
      padding: 15px 50px; /* Reduced padding */
      font-size: 16px; /* Reduced font size */
      display: block;
    }
    .dropdown-item:hover {
      background-color: #8DC3DF;
    }
    .nav-link {
      display: flex;
      align-items: center;
      gap: 22px;
      text-decoration: none;
      color: inherit;
    }
    .nav-icon {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
    @media (max-width: 991px) {
      .header-container {
        padding-right: 20px;
      }
      .clinic-name {
        font-size: 40px;
      }
      .navigation {
        flex-wrap: wrap;
      }
    }
  `],
  
  standalone: true,
  imports: [CommonModule],
})
export class Header {}
