import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Header } from "../header.component";
import { Sidebar } from "../sidebar.component";
import { Router } from "@angular/router";
import { KeycloakService } from "keycloak-angular";


@Component({
  selector: "make-payment",
  template: `
    
    <header class="header-container">
      <div class="header-content">
        <div class="logo-section">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f57fc796a0a917f15a7f0ca841742546d6aa6295003d995c499995bf9b52b472?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c"
            alt="Medisafe Private Clinic Logo"
            class="logo-image"
          />
          <h1 class="clinic-name">MEDISAFE PRIVATE CLINIC</h1>
        </div>
        <div class="user-profile">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c8ee9cff1836e4ee0e6d980eaa840870f3f564563e19eeec62e5c3ef155d59?placeholderIfAbsent=true&apiKey=a6e250b3254f4a399504301b58300c8c"
            alt="User profile picture"
            class="profile-image"
          />
          <span class="user-name">{{fullName}}</span>
        </div>
      </div>
      
    </header>
      
      <div class="form-group">
        <label for="service" class="form-label">Service</label>
        <div class="input-wrapper">
          <select id="service" name="appType"  required class="form-input">
            <option value="" disabled selected>Select a service</option>
            <option value="General Consultation">General Consultation</option>
            <option value="Review">Review</option>
            <option value="General Screening">General Screening</option>
            <option value="Dentistry">Dentistry</option>
            <option value="Psychology">Psychology</option>
          </select>
         
        </div>
      </div>



        <div class="paypal-content">
            <div #paymentRef></div>
        </div>

        <button type="button" (click)="cancel()" class="submit-button">CANCEL</button>
      
  `,
  styles: [`
  .header-container {
      background-color: #8DC3DF;
      padding: 24px 58px 10px 17px;
    }
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo-section {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .logo-image {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
    .clinic-name {
      color: #000;
      font: 800 60px Inter, sans-serif;
    }
    .user-profile {
      display: flex;
      align-items: center;
      gap: 19px;
      color: #000;
      font: 400 24px Inter, sans-serif;
    }
    .profile-image {
      width: 78px;
      height: 78px;
      object-fit: contain;
    }
    
    @media (max-width: 991px) {
      .header-container {
        padding-right: 20px;
      }
      .clinic-name {
        font-size: 40px;
      }
      .navigation {
        flex-wrap: wrap;
      }
    }
    .dashboard-container {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      
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
    .form-group {
      display: flex;
      align-items: center;
      gap: 0.5rem; 
      margin-top: 20px;
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
    

.paypal-content {
  
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
}


    
    @media (max-width: 991px) {
      .dashboard-content {
        max-width: 100%;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule, Header, Sidebar],
})
export class MakePaymentComponent implements OnInit{
    amount = 0;
    transactionID = '';
    firstName: string = '';
    lastName: string = '';
    fullName: string = '';
    

    @ViewChild ('paymentRef', {static: true}) paymentRef!: ElementRef;

    constructor(private router: Router, private keycloakService: KeycloakService){
        
    }

    ngOnInit(): void {

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

        
        this.amount = 50;
        window.paypal.Buttons(
            {
                createOrder: (data: any, actions: any) =>{
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: this.amount.toString(),
                                    currency_code: 'USD'
                                }
                            }
                        ]
                    })
                }, 
                onApprove: (data: any, actions: any) => {
                    actions.order.capture().then((details:any) => {
                        if(details.status === 'COMPLETED'){
                            this.transactionID = details.id;
                            alert('Payment successful!\n Transaction Id: ' + this.transactionID + '. \nYou will be redirected back to home page');
                            setTimeout(() => {
                                window.location.href = 'http://localhost:4200/';
                            }, 3000); 
                        }
                    })
                },
                onError: (error:any) => {
                    alert(error);
                }
            }
        ).render(this.paymentRef.nativeElement);
    }

    
    cancel(){
        this.router.navigate(['patientdashboard']);
    }



}