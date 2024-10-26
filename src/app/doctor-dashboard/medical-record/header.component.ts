import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  template: `
    <header class="header">
      <div class="logo-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f57fc796a0a917f15a7f0ca841742546d6aa6295003d995c499995bf9b52b472?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="Medisafe Private Clinic Logo" class="logo" />
        <h1 class="clinic-name">MEDISAFE PRIVATE CLINIC</h1>
      </div>
      <div class="user-info">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c8ee9cff1836e4ee0e6d980eaa840870f3f564563e19eeec62e5c3ef155d59?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="User Avatar" class="user-avatar" />
        <span class="user-name">John Doe</span>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: #84d357;
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 17px 58px 10px 12px;
    }
    @media (max-width: 991px) {
      .header {
        padding-right: 20px;
      }
    }
    .logo-container {
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
    @media (max-width: 991px) {
      .clinic-name {
        font-size: 40px;
      }
    }
    .user-info {
      display: flex;
      align-items: center;
      gap: 19px;
      color: #000;
      font: 400 24px Inter, sans-serif;
    }
    .user-avatar {
      width: 78px;
      height: 78px;
      object-fit: contain;
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {}