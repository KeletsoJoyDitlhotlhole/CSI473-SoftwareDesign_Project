import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-examination-findings",
  template: `
    <section class="examination-findings">
      <h2 class="section-title">Examinations Findings</h2>
      <div class="findings-grid">
        <label for="bp" class="finding-label">BP:</label>
        <input id="bp" type="text" class="finding-input" />
        <label for="heart-rate" class="finding-label">Heart Rate:</label>
        <input id="heart-rate" type="text" class="finding-input" />
        <label for="temperature" class="finding-label">Temperature:</label>
        <input id="temperature" type="text" class="finding-input" />
        <label for="respiratory-rate" class="finding-label">Respiratory Rate:</label>
        <input id="respiratory-rate" type="text" class="finding-input" />
      </div>
    </section>
  `,
  styles: [`
    .examination-findings {
      flex: 1;
    }
    .section-title {
      color: #000;
      font: 400 32px Inter, sans-serif;
      margin-bottom: 18px;
    }
    .findings-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 20px;
      align-items: center;
    }
    .finding-label {
      color: #000;
      font: 400 18px Inter, sans-serif;
    }
    .finding-input {
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
export class ExaminationFindingsComponent {}