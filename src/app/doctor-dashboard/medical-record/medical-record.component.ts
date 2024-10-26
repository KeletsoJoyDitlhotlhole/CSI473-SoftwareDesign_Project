import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { NavigationComponent } from "./navigation.component";
import { PatientInfoComponent } from "./patient-info.component";
import { ExaminationFindingsComponent } from "./exam-findings.component";
import { NotesComponent } from "./notes.component";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "medical-record",
  template: `
    <main class="medical-record">
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
      </header>
      <nav class="navigation">
        <div class="nav-indicator"></div>
        <a href="#appointments" class="nav-item">Appointments
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
        </a>
        <a href="#medical-reports" class="nav-item">Medical Reports
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
        </a>
        <a href="#stats" class="nav-item">Stats
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
        </a>
      </nav>
      <section class="report-container">
        <h1 class="report-title">Medical Report</h1>
      <form (ngSubmit)="onSubmit()">
        <div class="report-sections">
          <section class="patient-info">
            <h2 class="section-title">Patient Info</h2>
            <div class="info-grid">
              <label for="username" class="info-label">Username:</label>
              <input id="username" type="text" class="info-input" name="patient"  [(ngModel)]="reportData.patient"/>
            </div>
          </section>
          <section class="examination-findings">
            <h2 class="section-title">Examination Findings</h2>
            <div class="findings-grid">
              <label for="bp" class="finding-label">BP:</label>
              <input id="bp" type="text" class="finding-input" name="bp" [(ngModel)]="reportData.bp"/>
              <label for="heart-rate" class="finding-label">Heart Rate:</label>
              <input id="heart-rate" type="text" class="finding-input" name="heartRate"  [(ngModel)]="reportData.heartRate" />
              <label for="temperature" class="finding-label">Temperature:</label>
              <input id="temperature" type="text" class="finding-input" name="temperature" [(ngModel)]="reportData.temperature"/>
              <label for="respiratory-rate" class="finding-label">Respiratory Rate:</label>
              <input id="respiratory-rate" type="text" class="finding-input" name="respiratoryRate"  [(ngModel)]="reportData.respiratoryRate"/>
            </div>
          </section>
          <section class="consultation">
            <h2 class="section-title">Consultation</h2>
            <div class="consultation-grid">
            <label for="consultation-type" class="consultation-label">Type of Consultation:</label>
              <select id="consultation-type" class="consultation-input" name="consultType" [(ngModel)]="reportData.consultType">
                <option value="General Consultation">General Consultation</option>
                <option value="Review">Review</option>
                <option value="General Screening">General Screening</option>
                <option value="Dentistry">Dentistry</option>
                <option value="Psychology">Psychology</option>
              </select>
              <label for="illness" class="consultation-label">Illness:</label>
              <input id="illness" type="text" class="consultation-input" name="illness" [(ngModel)]="reportData.illness" />
              <label for="complaint" class="consultation-label">Complaint:</label>
              <input id="complaint" type="text" class="consultation-input" name="complaint" [(ngModel)]="reportData.complaint" />
              <label for="prescription" class="consultation-label">Prescription:</label>
              <input id="prescription" type="text" class="consultation-input" name="prescription"  [(ngModel)]="reportData.prescription" />
              <label for="treatment" class="consultation-label">Treatment:</label>
              <input id="treatment" type="text" class="consultation-input" name="treatment"  [(ngModel)]="reportData.treatment" />
              <label for="referral" class="consultation-label">Referral:</label>
              <input id="referral" type="text" class="consultation-input" name="referral" [(ngModel)]="reportData.referral"/>
            </div>
          </section>
        </div>
        <section class="notes-section">
          <h2 class="notes-title">More Notes</h2>
          <div class="notes-container">
            <input type="text" class="notes-input" name="notes"  placeholder="Enter additional notes here"  [(ngModel)]="reportData.notes"/>
          </div>
        </section>

        <button type="submit" class="add-button">ADD</button>
      </form>
      </section>
    </main>
  `,
  styles: [`
  .consultation-input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }
    .consultation-label {
      font: 400 18px Inter, sans-serif;
    }
    .medical-record {
      padding: 20px;
      background-color: #f0f0f0;
    }
    .header {
      background-color: #84d357;
      width: 100%;
      padding: 24px 58px 10px 17px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .logo-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .logo {
      width: 60px;
      height: 60px;
    }
    .clinic-name {
      font-size: 24px;
      color: #000000; 
    }
    .user-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .user-name {
      font: 400 18px Inter, sans-serif;
      color: #333;
    }
    .navigation {
      display: flex;
      margin-top: 16px;
      width: 100%;
      gap: 20px;
      color: #000;
      font: 700 20px Inter, sans-serif;
    }
    .nav-indicator {
      background-color: #4caf50;
      height: 15px;
      border-radius: 25px;
      width: 100px;
    }
    .nav-item {
      color: #4caf50; 
      display: flex;
      gap: 10px;
      align-items: center;
      position: relative;
    }
    .nav-icon {
      width: 30px;
      height: 30px;
    }
    .report-container {
      margin-top: 20px;
    }
    .report-title {
      color: #4caf50; 
      font: 400 32px Inter, sans-serif;
      margin-bottom: 20px;
    }
    .report-sections {
      display: flex;
      flex-direction: column; /* Stacks sections vertically */
      gap: 20px; 
    }
    .section-title {
      color: #4caf50; 
      font: 400 24px Inter, sans-serif;
      margin-bottom: 10px;
    }
    .patient-info, .examination-findings, .consultation, .notes-section {
      background-color: #ffffff;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .info-grid, .findings-grid, .consultation-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 10px;
      align-items: center;
    }
    .info-label, .finding-label, .consultation-label {
      color: #000;
      font: 400 18px Inter, sans-serif;
    }
    .info-input, .finding-input, .consultation-input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .notes-title {
      color: #4caf50; 
      font: 400 24px Inter, sans-serif;
      margin-bottom: 10px;
    }
    .notes-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .notes-input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .add-button {
      padding: 10px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100px;
    }
    .add-button:hover {
      background-color: #45a049; 
    }
  `],
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavigationComponent, PatientInfoComponent, ExaminationFindingsComponent, NotesComponent, FormsModule]
})
export class MedicalRecordComponent {
  reportData = {
    patient: '',
    bp: '',
    heartRate: '',
    temperature: '',
    respiratoryRate: '',
    illness: '',
    consultType: '', 
    complaint: '',
    prescription: '',
    treatment: '',
    referral: '',
    notes: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('patient', this.reportData.patient);
    formData.append('bp', this.reportData.bp);
    formData.append('heartRate', this.reportData.heartRate);
    formData.append('temperature', this.reportData.temperature);
    formData.append('respiratoryRate', this.reportData.respiratoryRate);
    formData.append('illness', this.reportData.illness);
    formData.append('consultType', this.reportData.consultType);
    formData.append('complaint', this.reportData.complaint);
    formData.append('prescription', this.reportData.prescription);
    formData.append('treatment', this.reportData.treatment);
    formData.append('referral', this.reportData.referral);
    formData.append('notes', this.reportData.notes);

    this.http.post('http://localhost:3000/src/app/doctor-dashboard/medical-record/addmedrecord.php', formData)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          alert(response.message);
          setTimeout(() => {
            window.location.href = 'http://localhost:4200/';
          }, 2000);
        },
        error: (error) => {
          console.error("Error posting report:", error);
          alert("An error occurred while submitting the report.");
          setTimeout(() => {
            window.location.href = 'http://localhost:4200/';
          }, 2000);
        }
      });
  }
}
