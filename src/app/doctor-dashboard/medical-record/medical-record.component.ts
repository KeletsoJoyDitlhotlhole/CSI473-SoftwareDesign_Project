import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { NavigationComponent } from "./navigation.component";
import { PatientInfoComponent } from "./patient-info.component";
import { ExaminationFindingsComponent } from "./exam-findings.component";
import { NotesComponent } from "./notes.component";

@Component({
  selector: "medical-record",
  template: `
    <main class="medical-record">
      <app-header></app-header>
      <app-navigation></app-navigation>
      <section class="report-container">
        <h1 class="report-title">Medical Report</h1>
        <div class="report-sections">
          <app-patient-info></app-patient-info>
          <app-examination-findings></app-examination-findings>
        </div>
        <app-notes></app-notes>
      </section>
    </main>
  `,
  styles: [`
    .medical-record {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: 7px 0 56px;
    }
    .report-container {
      align-self: center;
      display: flex;
      width: 100%;
      max-width: 1255px;
      flex-direction: column;
      margin: 25px 0 0 25px;
    }
    @media (max-width: 991px) {
      .report-container {
        max-width: 100%;
      }
    }
    .report-title {
      color: #000;
      align-self: center;
      font: 700 48px Inter, sans-serif;
    }
    @media (max-width: 991px) {
      .report-title {
        font-size: 40px;
      }
    }
    .report-sections {
      display: flex;
      margin-top: 33px;
      width: 975px;
      max-width: 100%;
      gap: 20px;
      color: #000;
      flex-wrap: wrap;
      justify-content: space-between;
      font: 400 32px Inter, sans-serif;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavigationComponent,
    PatientInfoComponent,
    ExaminationFindingsComponent,
    NotesComponent
  ],
})
export class MedicalRecordComponent {}