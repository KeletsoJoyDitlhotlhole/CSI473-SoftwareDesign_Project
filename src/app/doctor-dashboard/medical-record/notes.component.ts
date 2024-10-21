import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-notes",
  template: `
    <section class="notes-section">
      <h2 class="notes-title">More notes</h2>
      <div class="notes-container">
        <textarea class="notes-input" rows="5" placeholder="Enter additional notes here"></textarea>
        <a href="/doctordashboard"><button class="add-button">Add</button></a>
      </div>
    </section>
  `,
  styles: [`
    .notes-section {
      margin-top: 38px;
    }
    .notes-title {
      color: #000;
      font: 400 32px Inter, sans-serif;
      margin-bottom: 20px;
    }
    .notes-container {
      display: flex;
      gap: 20px;
      align-items: flex-end;
    }
    .notes-input {
      flex-grow: 1;
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 10px;
      font: 400 18px Inter, sans-serif;
      resize: vertical;
    }
    .add-button {
      border-radius: 30px;
      background-color: #00b4d8;
      color: #fff;
      font: 400 32px Inter, sans-serif;
      padding: 10px 55px;
      border: none;
      cursor: pointer;
    }
    @media (max-width: 991px) {
      .add-button {
        padding: 10px 20px;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class NotesComponent {}