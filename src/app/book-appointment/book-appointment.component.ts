import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { SidebarComponent } from "./sidebar.component";
import { AppointmentFormComponent } from "./apptform.component";

@Component({
  selector: "book-appointment",
  template: `
    <main class="book-appointment-container">
      <app-header></app-header>
      <div class="content-wrapper">
        <app-sidebar></app-sidebar>
        <section class="appointment-section">
          <h1 class="appointment-title">Book an Appointment</h1>
          <app-appointment-form></app-appointment-form>
        </section>
      </div>
    </main>
  `,
  styles: [`
    .book-appointment-container {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .content-wrapper {
      display: flex;
      width: 100%;
    }
    .appointment-section {
      flex-grow: 1;
      padding: 2rem;
    }
    .appointment-title {
      color: #000;
      font: 700 3rem Inter, sans-serif;
      margin-bottom: 2rem;
    }
    @media (max-width: 991px) {
      .appointment-title {
        font-size: 2.5rem;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, AppointmentFormComponent],
})
export class BookAppointmentComponent {}