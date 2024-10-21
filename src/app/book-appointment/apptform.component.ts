import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-appointment-form",
  standalone: true,
  template: `
    <form class="appointment-form" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="date" class="form-label">Date:</label>
        <div class="input-wrapper">
          <input type="date" id="date" name="date" required class="form-input" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="input-icon" />
        </div>
      </div>
      <div class="form-group">
        <label for="time" class="form-label">Time:</label>
        <div class="input-wrapper">
          <input type="time" id="time" name="time"  required class="form-input" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/909a122dae37e2e88c9031f526d376d6b557e45f49839b236a21026bec91ed7f?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="" class="input-icon" />
        </div>
      </div>
      <div class="form-group">
        <label for="doctorName" class="form-label">Doctor's Name:</label>
        <div class="input-wrapper">
          <select id="doctorName" name="doctorName"  required class="form-input">
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
          <select id="specialty" name="specialty"  required class="form-input">
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
      width: 200px; /* Set a fixed width for all input fields */
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
    date: '',
    time: '',
    doctorName: '',
    specialty: ''
  };

  onSubmit() {
    console.log('Appointment Data:', this.appointmentData);
    // Handle form submission logic here
  }
}
