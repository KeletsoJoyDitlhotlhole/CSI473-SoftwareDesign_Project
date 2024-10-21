import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-patient-info",
  template: `
    <section class="patient-info">
      <h2 class="section-title">Patient info</h2>
      <div class="info-grid">
        <label for="name" class="info-label">Name:</label>
        <input id="name" type="text" class="info-input" />
        <label for="dob" class="info-label">DoB:</label>
        <input id="dob" type="date" class="info-input" />
        <label for="gender" class="info-label">Gender:</label>
        <select id="gender" class="info-input">
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label for="status" class="info-label">Status:</label>
        <input id="status" type="text" class="info-input" />
      </div>
    </section>
  `,
  styles: [`
    .patient-info {
      flex: 1;
    }
    .section-title {
      color: #000;
      font: 400 32px Inter, sans-serif;
      margin-bottom: 18px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 20px;
      align-items: center;
    }
    .info-label {
      color: #000;
      font: 400 18px Inter, sans-serif;
    }
    .info-input {
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 10px;
      font: 400 18px Inter, sans-serif;
      width: 100%;
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class PatientInfoComponent {}