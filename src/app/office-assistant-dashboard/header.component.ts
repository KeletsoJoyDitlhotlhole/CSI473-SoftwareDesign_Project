import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  template: `
    <header class="header">
      <div class="header-content">
        <div class="logo-container">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f57fc796a0a917f15a7f0ca841742546d6aa6295003d995c499995bf9b52b472?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="Medisafe Private Clinic Logo" class="logo" />
          <h1 class="clinic-name">MEDISAFE PRIVATE CLINIC</h1>
        </div>
        <div class="user-info">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c8ee9cff1836e4ee0e6d980eaa840870f3f564563e19eeec62e5c3ef155d59?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="User Avatar" class="user-avatar" />
          <span class="user-name">John Doe</span>
        </div>
      </div>
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="nav-item active"><a href="#appointments">Appointments</a></li>
          <li class="nav-item"><a href="#payments">Payments</a></li>
          <li class="nav-item"><a href="#claims">Claims</a></li>
          <li class="nav-item"><a href="#statistics">Statistics</a></li>
          <li class="nav-item"><a href="#patients">Patients</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background-color: #8DC3DF;
      padding: 24px 58px 9px 17px;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
    .main-nav {
      margin-top: 31px;
    }
    .nav-list {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    .nav-item {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .nav-item a {
      color: #000;
      text-decoration: none;
      font: 700 24px Inter, sans-serif;
    }
    .nav-item.active {
      background-color: #CBF3F0;
      padding: 5px 10px;
    }
    @media (max-width: 991px) {
      .header {
        padding: 24px 20px 9px;
      }
      .clinic-name {
        font-size: 40px;
      }
      .nav-list {
        flex-wrap: wrap;
        gap: 10px;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class Header {}