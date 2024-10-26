import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: "app-view-appointment",
  template: `
    <main class="view-appointment-patient">
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
      <h2 class="section-title">View Appointments</h2>
      <section class="appointment-table">
        <div class="table-header">
          <span class="header-cell">App No.</span>
          <span class="header-cell">Name</span>
          <span class="header-cell">Details</span>
          <span class="header-cell">Doctor</span>
        </div>
        <div *ngFor="let appointment of appointments" class="appointment-row">
          <span class="appointment-cell">{{ appointment.appReference }}</span>
          <span class="appointment-cell">{{ fullName }}</span>
          <span class="appointment-cell">{{ appointment.appDate }}, {{ appointment.appTime }} - {{ appointment.appType }}</span>
          <span class="appointment-cell">{{ appointment.doctor }}</span>
        </div>
      </section>
    </main>
  `,
  styles: [`
    :host { display: contents; }
    .view-appointment-patient {
      background-color: rgba(0, 180, 216, 0.3);
      display: flex;
      padding-bottom: 109px;
      flex-direction: column;
      overflow: hidden;
      align-items: center;
    }
    .header {
      background-color: rgba(23, 161, 250, 0.36);
      align-self: stretch;
      display: flex;
      gap: 23px;
      flex-wrap: wrap;
      padding: 24px 58px 15px 17px;
    }
    .logo-container {
      display: flex;
      flex-direction: column;
    }
    .logo {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 150px;
    }
    .logo-accent {
      background-color: #CBF3F0;
      margin-top: 17px;
      width: 47px;
      height: 28px;
    }
    .header-content {
      align-self: start;
      display: flex;
      margin-top: 15px;
      flex-direction: column;
      font-family: Inter, sans-serif;
      color: #000;
      flex-grow: 1;
      flex-basis: 0;
      width: fit-content;
    }
    .clinic-info {
      display: flex;
      width: 100%;
      align-items: start;
      gap: 40px 100px;
      flex-wrap: wrap;
    }
    .clinic-name {
      font-size: 60px;
      font-weight: 800;
      flex-grow: 1;
      width: 747px;
    }
    .user-info {
      display: flex;
      margin-top: 12px;
      gap: 19px;
      font-size: 24px;
      font-weight: 400;
    }
    .user-avatar {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 78px;
    }
    .user-name {
      flex-basis: auto;
      margin: auto 0;
    }
    .navigation {
      display: flex;
      width: 894px;
      max-width: 100%;
      align-items: start;
      gap: 20px;
      font-size: 36px;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 41px 0 0 16px;
    }
    .nav-item {
      display: flex;
      margin-top: 6px;
      gap: 5px;
      font-weight: 700;
      text-decoration: none;
      color: inherit;
    }
    .nav-icon {
      aspect-ratio: 1;
      object-fit: contain;
      object-position: center;
      width: 30px;
      margin: auto 0;
    }
    .section-title {
      color: #000;
      margin-top: 32px;
      font: 700 48px Inter, sans-serif;
    }
    .appointment-table {
      background-color: #FFF;
      display: flex;
      flex-direction: column;
      margin-top: 38px;
      width: 100%;
      max-width: 1323px;
      color: #000;
      padding: 20px;
      font: 400 18px Inter, sans-serif;
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
    .appointment-row {
      display: flex;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      align-items: center;
    }
    .appointment-cell {
      flex: 1;
      text-align: left;
      padding: 10px;
    }
    @media (max-width: 991px) {
      .view-appointment-patient {
        padding-bottom: 100px;
      }
      .header {
        padding-right: 20px;
      }
      .header-content,
      .clinic-info,
      .clinic-name {
        max-width: 100%;
      }
      .clinic-name {
        font-size: 40px;
      }
      .navigation {
        margin-top: 40px;
        white-space: initial;
      }
      .nav-item,
      .section-title {
        white-space: initial;
      }
      .section-title {
        max-width: 100%;
        font-size: 40px;
      }
      .appointment-table {
        max-width: 100%;
        padding: 0 20px 100px;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class ViewAppointmentComponent {
  appointments: any[] = [];
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  fullName: string = '';

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {}

  ngOnInit() {
    const isLoggedIn = this.keycloakService.isLoggedIn();
    if (isLoggedIn) {
      this.keycloakService.loadUserProfile().then(profile => {
        this.username = profile.username || '';
        this.firstName = profile.firstName!;
        this.lastName = profile.lastName!;
        this.fullName = `${this.firstName} ${this.lastName}`;
        this.fetchAppointments(this.username);
      }).catch(error => {
        console.error('Error loading user profile', error);
      });
    } else {
      console.error('User is not logged in');
    }
  }

  fetchAppointments(username: string) {
    this.http.get<any[]>(`http://localhost:3000/src/app/view-appointment-patient/viewappt.php?username=${username}`)
      .subscribe((data: any[]) => {
        this.appointments = data;
      }, error => {
        console.error('Error fetching appointments:', error);
      });
  }
}
