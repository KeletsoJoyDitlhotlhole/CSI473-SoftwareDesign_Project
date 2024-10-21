import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sidebar",
  template: `
    <nav class="sidebar">
      <div class="nav-item">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e4ade6522e3770beb8174302f446341978a6a245dd279df5d43b45251804ca2?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
        <div class="nav-indicator"></div>
      </div>
      <div class="nav-item">
        <span class="nav-text">Appointments</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="Appointments icon" class="nav-icon" />
      </div>
      <div class="nav-item">
        <span class="nav-text">Payments</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="Payments icon" class="nav-icon" />
      </div>
    </nav>
  `,
  styles: [`
    .sidebar {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      background-color: #f0f0f0;
    }
    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .nav-icon {
      width: 30px;
      height: 30px;
    }
    .nav-indicator {
      background-color: #cbf3f0;
      height: 28px;
      width: 4px;
    }
    .nav-text {
      color: #000;
      font: 700 2.25rem Inter, sans-serif;
    }
    @media (max-width: 991px) {
      .nav-text {
        font-size: 1.75rem;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class SidebarComponent {}