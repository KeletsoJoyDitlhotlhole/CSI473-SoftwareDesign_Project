import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  template: `
    <header class="header">
      <div class="header-content">
        <div class="logo-section">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f57fc796a0a917f15a7f0ca841742546d6aa6295003d995c499995bf9b52b472?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="Medisafe Private Clinic Logo" class="logo" />
          <h1 class="clinic-name">MEDISAFE PRIVATE CLINIC</h1>
        </div>
        <nav class="navigation">
          <div class="nav-item">
            <span class="appointment-label">Appointments</span>
             </div>
          <div class="nav-dropdown">
            <button class="appointment-label">Medical Reports</button>
            <div class="dropdown-menu">
              <a href="/medrecord" class="dropdown-item">Add Records</a>
              <a href="/viewrecords" class="dropdown-item">View Records</a>
            </div>
          </div>
          <div class="nav-item">
            <span class="appointment-label">Stats</span>
             </div>
        </nav>
        <div class="user-section">
          
          <div class="user-icons">
             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c8ee9cff1836e4ee0e6d980eaa840870f3f564563e19eeec62e5c3ef155d59?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="User profile picture" class="user-avatar" />
          </div>
          <span class="user-name">John Doe</span>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: #84d357;
      width: 100%;
      padding: 24px 58px 10px 17px;
    }
    a {
    text-decoration: none;
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
    .logo {
      width: 120px;
      height: 120px;
      object-fit: contain;
    }
    
  .appointment-label,
  .medical-reports-label,
  .stats-label {
    font-weight: bold;  
    font-size: 18px;    
    background: transparent;
    border: none; 
  }


    .clinic-name {
      color: #000;
      font: 700 36px Inter, sans-serif; 
    }
    .navigation {
      display: flex;
      gap: 30px; 
      align-items: center; 
    }
    .nav-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .nav-text {
      font-weight: bold;
      color: #000;
      font: 500 24px Inter, sans-serif; 
      background: none; 
    }
    .nav-icon {
      width: 24px;
      height: 24px;
      text-decoration: bold;
      object-fit: contain;
    }
    .nav-dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-toggle {
      color: #000;
      font: 500 24px Inter; 
      background: none; 
    
    }
    .dropdown-menu {
      display: none;
      position: absolute;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      border-radius: 10px;
      top: 20px; 
      min-width: 200px;
    }
    .nav-dropdown:hover .dropdown-menu {
      display: block;
    }
    .dropdown-item {
      color: inherit;
      text-decoration: none;
      padding: 10px 20px;
      font-size: 16px;
      display: block;
    }
    .dropdown-item:hover {
      background-color: #84d357;
    }
    .user-section {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .stats-text {
      color: #000;
      font: 500 24px Inter, sans-serif; 
    }
    .user-icons {
      display: flex;
      gap: 1px;
    }
    .user-icon {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
    .user-avatar {
      width: 64px;
      height: 64px;
      object-fit: contain;
    }
    .user-name {
      color: #000;
      font: 400 20px Inter, sans-serif;
    }
    @media (max-width: 991px) {
      .header {
        padding: 24px 20px 10px;
      }
      .clinic-name {
        font-size: 28px; 
      }
      .header-content {
        flex-direction: column;
        align-items: flex-start;
      }
      .navigation, .user-section {
        margin-top: 20px;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class Header {}
