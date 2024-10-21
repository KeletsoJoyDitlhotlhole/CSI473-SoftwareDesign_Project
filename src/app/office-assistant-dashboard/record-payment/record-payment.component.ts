import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-record-payment",
  template: `
    <div class="record-payment-container">
      <header class="header">
        <div class="logo-container">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f57fc796a0a917f15a7f0ca841742546d6aa6295003d995c499995bf9b52b472?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="Medisafe Private Clinic Logo" class="logo" />
          <h1 class="clinic-name">MEDISAFE PRIVATE CLINIC</h1>
        </div>
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="nav-item active"></li>
            <li class="nav-item">
              <a href="#appointments" class="nav-link">Appointments</a>
            </li>
            <li class="nav-item">
              <a href="#payments" class="nav-link">Payments</a>
            </li>
            <li class="nav-item">
              <a href="#claims" class="nav-link">Claims</a>
            </li>
            <li class="nav-item">
              <a href="#statistics" class="nav-link">Statistics</a>
            </li>
          </ul>
        </nav>
      </header>
      <aside class="sidebar">
        <h2 class="sidebar-title">Patients</h2>
        <div class="user-profile">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c8ee9cff1836e4ee0e6d980eaa840870f3f564563e19eeec62e5c3ef155d59?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c" alt="John Doe profile picture" class="profile-image" />
          <span class="user-name">John Doe</span>
        </div>
      </aside>
      <main class="main-content">
        <h2 class="page-title">Record Payment</h2>
        <form class="payment-form">
          <div class="form-row">
            <div class="form-group">
              <label for="patientName" class="form-label">Patient Name:</label>
              <div class="input-wrapper">
                <select id="patientName" class="form-select">
                  <option value="">Select patient</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="date" class="form-label">Date:</label>
              <div class="input-wrapper">
                <input type="date" id="date" class="form-input" />
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="patientNumber" class="form-label">Patient Number:</label>
              <div class="input-wrapper">
                <input type="text" id="patientNumber" class="form-input" />
              </div>
            </div>
            <div class="form-group">
              <label for="time" class="form-label">Time:</label>
              <div class="input-wrapper">
                <input type="time" id="time" class="form-input" />
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="doctorName" class="form-label">Doctor's Name:</label>
              <div class="input-wrapper">
                <select id="doctorName" class="form-select">
                  <option value="">Select doctor</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="amount" class="form-label">Amount:</label>
              <div class="input-wrapper">
                <input type="number" id="amount" class="form-input" min="0" step="0.01" />
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="doctorSpecialty" class="form-label">Doctor's Specialty:</label>
              <div class="input-wrapper">
                <select id="doctorSpecialty" class="form-select">
                  <option value="">Select specialty</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="paymentMethod" class="form-label">Payment Method:</label>
              <div class="input-wrapper">
                <select id="paymentMethod" class="form-select">
                  <option value="">Select payment method</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" class="submit-button">Record</button>
        </form>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: contents;
    }
    .record-payment-container {
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      padding: 7px 0 66px;
    }
    .header {
      background-color: #c4c4c4;
      display: flex;
      justify-content: space-between;
      padding: 17px 54px 17px 17px;
      width: 100%;
    }
    .logo-container {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .logo {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
    .clinic-name {
      color: #000;
      font: 800 60px Inter, sans-serif;
    }
    .main-nav {
      margin-top: 31px;
    }
    .nav-list {
      display: flex;
      gap: 20px;
      list-style-type: none;
      padding: 0;
    }
    .nav-item {
      color: #000;
      font: 700 24px Inter, sans-serif;
    }
    .nav-item.active {
      background-color: #aad2db;
      width: 47px;
      height: 30px;
    }
    .sidebar {
      width: 200px;
      padding: 20px;
    }
    .sidebar-title {
      color: #000;
      font: 700 24px Inter, sans-serif;
      margin-bottom: 20px;
    }
    .user-profile {
      display: flex;
      align-items: center;
      gap: 19px;
    }
    .profile-image {
      width: 78px;
      height: 78px;
      object-fit: contain;
    }
    .user-name {
      color: #000;
      font: 400 24px Inter, sans-serif;
    }
    .main-content {
      flex: 1;
      padding: 20px;
    }
    .page-title {
      color: #000;
      font: 700 48px Inter, sans-serif;
      text-align: center;
      margin-bottom: 40px;
    }
    .payment-form {
      max-width: 1068px;
      margin: 0 auto;
    }
    .form-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
    }
    .form-group {
      flex: 1;
      margin-right: 20px;
    }
    .form-group:last-child {
      margin-right: 0;
    }
    .form-label {
      color: #000;
      font: 400 18px Inter, sans-serif;
      display: block;
      margin-bottom: 10px;
    }
    .input-wrapper {
      background-color: #fff;
      padding: 2px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .form-input,
    .form-select {
      width: 100%;
      padding: 8px;
      border: none;
      background: transparent;
      font: 400 16px Inter, sans-serif;
    }
    .submit-button {
      background-color: #00b4d8;
      border: none;
      border-radius: 30px;
      color: #000;
      cursor: pointer;
      font: 400 24px Inter, sans-serif;
      padding: 10px 36px;
      float: right;
    }
    @media (max-width: 991px) {
      .header {
        padding-right: 20px;
      }
      .clinic-name {
        font-size: 40px;
      }
      .nav-list {
        flex-wrap: wrap;
      }
      .form-row {
        flex-direction: column;
      }
      .form-group {
        margin-right: 0;
        margin-bottom: 20px;
      }
      .submit-button {
        float: none;
        width: 100%;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule],
})
export class RecordPaymentComponent {}