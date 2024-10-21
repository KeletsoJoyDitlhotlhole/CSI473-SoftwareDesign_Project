import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navigation",
  template: `
    <nav class="navigation">
      <div class="nav-indicator"></div>
      <a href="#appointments" class="nav-item">
        Appointments
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
      </a>
      <a href="#medical-reports" class="nav-item">
        Medical Reports
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
      </a>
      <a href="#stats" class="nav-item">
        Stats
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
      </a>
    </nav>
  `,
  styles: [`
    .navigation {
      display: flex;
      margin-top: 16px;
      width: 100%;
      max-width: 1228px;
      align-items: start;
      gap: 20px;
      color: #000;
      flex-wrap: wrap;
      justify-content: space-between;
      font: 700 36px Inter, sans-serif;
    }
    @media (max-width: 991px) {
      .navigation {
        max-width: 100%;
      }
    }
    .nav-indicator {
      background-color: #8dc3df;
      align-self: stretch;
      width: 47px;
      height: 30px;
      margin: auto 0;
    }
    .nav-item {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: inherit;
    }
    .nav-icon {
      width: 30px;
      height: 30px;
      margin-left: 13px;
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class NavigationComponent {}