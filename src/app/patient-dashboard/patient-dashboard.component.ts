import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Header } from "./header.component";
import { Sidebar } from "./sidebar.component";
import { Newsletter } from "./newsletter.component";

@Component({
  selector: "patient-dashboard",
  template: `
    <div class="dashboard-container">
      <app-header></app-header>
      <div class="dashboard-content">
        <app-sidebar></app-sidebar>
        <app-newsletter></app-newsletter>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .dashboard-content {
      display: flex;
      width: 100%;
      max-width: 1396px;
      gap: 40px 100px;
      flex-wrap: wrap;
      font: 400 24px Inter, sans-serif;
    }
    @media (max-width: 991px) {
      .dashboard-content {
        max-width: 100%;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule, Header, Sidebar, Newsletter],
})
export class PatientDashboard {}