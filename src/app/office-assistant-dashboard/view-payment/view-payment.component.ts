import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: "app-view-payment",
  template: `
    <main class="view-records-patient">
      <header class="header">
        <div class="logo-container">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f57fc796a0a917f15a7f0ca841742546d6aa6295003d995c499995bf9b52b472?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="Medisafe Private Clinic Logo" class="logo" />
          <div class="logo-accent"></div>
        </div>
        <div class="header-content">
          <div class="clinic-info">
            <h1 class="clinic-name">MEDISAFE PRIVATE CLINIC</h1>
            <div class="user-info">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c8ee9cff1836e4ee0e6d980eaa840870f3f564563e19eeec62e5c3ef155d59?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="User Avatar" class="user-avatar" />
              <span class="user-name">{{fullName}}</span>
            </div>
          </div>
          <nav class="navigation">
            <a href="#appointments" class="nav-item">
              <span>Appointments</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
            </a>
            <a href="#payments" class="nav-item">
              <span>Payments</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="nav-icon" />
            </a>
          </nav>
        </div>
      </header>
      <h2 class="section-title">View Payments</h2>


      <form (ngSubmit)="onSubmit()">
      <label for="username" class="consultation-label">Search: </label>
      <input id="username" type="text" class="consultation-input" name="username" placeholder="Enter patient username" [(ngModel)]="username"/><button type="submit" class="add-button">SEARCH</button>

      </form>


      <section class="records-table">
    <div class="table-header">
      <span class="header-cell">Payment No.</span>
      <span class="header-cell">Date of Payment</span>
      <span class="header-cell">Patient Name</span>
      <span class="header-cell">Consultation Info</span>
      <span class="header-cell">Amount Paid</span>
      <span class="header-cell">Outstanding Balance</span>
      <span class="header-cell">Payment Method</span>

    </div>
    <div *ngFor="let record of paymentRecords" class="record-row">
    <span class="record-cell">{{ record.paymentNo }}</span>
      <span class="record-cell">{{ record.date }}</span>
      <span class="record-cell">{{ record.fullName }}</span>
      <span class="record-cell">
        Doctor: {{ record.doctorName }}<br>
        Consult Type: {{ record.doctorSpecialty }}<br>
      </span>
      <span class="record-cell">{{ record.amount }}</span>
      <span class="record-cell">{{ record.outstandingBalance }}</span>
      <span class="record-cell">{{ record.paymentMethod }}</span>
    </div>
  </section>
    </main>
  `,
  styles: [`
  .add-button {
      padding: 10px;
      background-color: #0000FF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100px;
    }
  .consultation-input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    :host { display: contents; }
    .view-records-patient {
      background-color: #ADD8E6;
      display: flex;
      padding-bottom: 109px;
      flex-direction: column;
      align-items: center;
    }
    .header {
      background-color: #8DC3DF;
      padding: 24px 58px 10px 17px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .logo-container {
      display: flex;
      flex-direction: column;
    }
    .logo {
      width: 150px;
      object-fit: contain;
    }
    .header-content {
      display: flex;
      margin-top: 15px;
      flex-direction: column;
      color: #000;
    }
    .clinic-name {
      font-size: 60px;
      font-weight: 800;
    }
    .user-info {
      display: flex;
      margin-top: 12px;
      gap: 19px;
      font-size: 24px;
    }
    .user-avatar {
      width: 78px;
      object-fit: contain;
    }
    .navigation {
      display: flex;
      align-items: start;
      gap: 20px;
      font-size: 36px;
      margin-top: 41px;
    }
    .section-title {
      color: #000;
      margin-top: 32px;
      font: 700 48px Inter, sans-serif;
    }
    .records-table {
      background-color: #FFF;
      display: flex;
      flex-direction: column;
      margin-top: 38px;
      width: 100%;
      max-width: 1323px;
      color: #000;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    .table-header {
      display: flex;
      font-weight: bold;
      border-bottom: 2px solid #000;
      padding-bottom: 10px;
    }
    .header-cell {
      flex: 1;
      text-align: left;
      padding: 10px;
    }
    .record-row {
      display: flex;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      align-items: center;
    }
    .record-cell {
      flex: 1;
      text-align: left;
      padding: 10px;
      
    }
  `],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ViewPaymentComponent implements OnInit {
  paymentRecords: any[] = [];
  username = '';
  firstName: string = '';
  lastName: string = '';
  fullName: string = '';

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {}

  ngOnInit() {
    const isLoggedIn = this.keycloakService.isLoggedIn();
    if (isLoggedIn) {
      this.keycloakService.loadUserProfile().then(profile => {
        this.firstName = profile.firstName!;
        this.lastName = profile.lastName!;
        this.fullName = `${this.firstName} ${this.lastName}`;
      }).catch(error => {
        console.error('Error loading user profile', error);
      });
    } else {
      console.error('User is not logged in');
    }
  }

  onSubmit() {
    this.http.get<any>(`http://localhost:3000/src/app/office-assistant-dashboard/view-payment/viewpayments.php?username=${this.username}`)
      .subscribe(response => {
        if (!response.success) {
          alert(response.message); 
          this.paymentRecords = []; 
        } else {
          this.paymentRecords = response.records; 
        }
      }, error => {
        alert('Error fetching payment records: ' + error);
        this.paymentRecords = []; 
      });
}

  
}
