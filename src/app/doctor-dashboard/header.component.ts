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
            <span class="nav-text">Appointments</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
          </div>
          <div class="nav-item">
            <a href="/medrecord"><span class="nav-text">Medical Reports</span></a>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
          </div>
        </nav>
        <div class="user-section">
          <span class="stats-text">Stats</span>
          <div class="user-icons">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="user-icon" />
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
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
    .clinic-name {
      color: #000;
      font: 800 60px Inter, sans-serif;
    }
    .navigation {
      display: flex;
      gap: 20px;
    }
    .nav-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .nav-text {
      color: #000;
      font: 700 36px Inter, sans-serif;
    }
    .nav-icon {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
    .user-section {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .stats-text {
      color: #000;
      font: 700 36px Inter, sans-serif;
    }
    .user-icons {
      display: flex;
      gap: 1px;
    }
    .user-icon {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
    .user-avatar {
      width: 78px;
      height: 78px;
      object-fit: contain;
    }
    .user-name {
      color: #000;
      font: 400 24px Inter, sans-serif;
    }
    @media (max-width: 991px) {
      .header {
        padding: 24px 20px 10px;
      }
      .clinic-name {
        font-size: 40px;
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