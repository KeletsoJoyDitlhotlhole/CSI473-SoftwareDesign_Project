import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-appointment-form",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form class="appointment-form" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="date" class="form-label">Date:</label>
        <div class="input-wrapper">
          <input type="date" id="date" name="appDate" required class="form-input" [(ngModel)]="appointmentData.appDate" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="input-icon" />
        </div>
      </div>
      <div class="form-group">
        <label for="time" class="form-label">Time:</label>
        <div class="input-wrapper">
          <input type="time" id="time" name="appTime"  required class="form-input" [(ngModel)]="appointmentData.appTime" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="input-icon" />
        </div>
      </div>
      <div class="form-group">
        <label for="patient" class="form-label">Patient username:</label>
        <div class="input-wrapper">
          <input type="text" id="patient" name="patient"  required class="form-input" placeholder="Patient username" [(ngModel)]="appointmentData.patient" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="input-icon" />
        </div>
      </div>
      <div class="form-group">
        <label for="doctorName" class="form-label">Doctor's Name:</label>
        <div class="input-wrapper">
          <select id="doctorName" name="doctor"  required class="form-input" [(ngModel)]="appointmentData.doctor">
            <option value="" disabled selected>Select a doctor</option>
            <option value="Sheila O'Reilly">Sheila O'Reilly</option>
            <option value="Nkamo Lepodisi">Nkamo Lepodisi</option>
            <option value="Jack Smith">Jack Smith</option>
            <option value="Gabbie Molefi">Gabbie Molefi</option>
          </select>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="input-icon" />
        </div>
      </div>
      <div class="form-group">
        <label for="specialty" class="form-label">Doctor's Specialty:</label>
        <div class="input-wrapper">
          <select id="specialty" name="appType"  required class="form-input" [(ngModel)]="appointmentData.appType">
            <option value="" disabled selected>Select a specialty</option>
            <option value="General Consultation">General Consultation</option>
            <option value="Review">Review</option>
            <option value="General Screening">General Screening</option>
            <option value="Dentistry">Dentistry</option>
            <option value="Psychology">Psychology</option>
          </select>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="input-icon" />
        </div>
      </div>
      <button type="submit" class="submit-button">SAVE</button>
    </form>
  `,
  styles: [`
    .appointment-form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 500px;
    }
    .form-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .form-label {
      color: #000;
      font: 700 1.5rem Inter, sans-serif;
    }
    .input-wrapper {
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .form-input {
      border: none;
      outline: none;
      font: 400 1rem Inter, sans-serif;
      width: 200px; 
    }
    .input-icon {
      width: 30px;
      height: 30px;
    }
    .submit-button {
      border-radius: 30px;
      background-color: #17a1fa;
      color: #212121;
      font: 800 1.5rem Inter, sans-serif;
      padding: 1rem 2rem;
      align-self: center;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .submit-button:hover {
      background-color: #1490e0;
    }
    @media (max-width: 991px) {
      .form-group {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
      .input-wrapper {
        width: 100%;
      }
    }
  `]
})
export class AppointmentFormComponent {
  appointmentData = {
    appDate: '',
    appTime: '',
    patient: '',
    doctor: '',
    appType: ''
  };

  message: string | null = null;
  success: boolean = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('appDate', this.appointmentData.appDate);
    formData.append('appTime', this.appointmentData.appTime);
    formData.append('patient', this.appointmentData.patient);
    formData.append('doctor', this.appointmentData.doctor);
    formData.append('appType', this.appointmentData.appType);

    this.http.post('http://localhost:3000/src/app/book-appointment/bookappt.php', formData)
      .subscribe({
        next: (response: any) => {
          this.message = response.message;
          this.success = response.success;

          if (response.success) {
            // Redirect after a delay
            alert(response.message + "You will be redirected back to home page");
            setTimeout(() => {
              window.location.href = 'http://localhost:4200/';
            }, 3000); 
          } else {
          }
        },
        error: (error) => {
          this.message = "An error occurred while booking the appointment. You will be redirected in a few seconds.";
          alert(this.message);
          this.success = false;
          setTimeout(() => {
            window.location.href = 'http://localhost:4200/';
          }, 3000);
        }
      });
  }

  
}
