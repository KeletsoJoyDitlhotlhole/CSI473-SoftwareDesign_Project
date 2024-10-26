import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component'; 
import { LoginPageComponent } from './login.component'; 
import { PatientDashboard } from './patient-dashboard/patient-dashboard.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AuthGuard } from './auth.guard';
import { DoctorsDashboard } from './doctor-dashboard/doctor-dashboard.component';
import { OfficeAssistantDashboard } from './office-assistant-dashboard/office-assistant-dashboard.component';
import { ViewAppointmentComponent } from './view-appointment-patient/view-appointment.component';
import { MedicalRecordComponent } from './doctor-dashboard/medical-record/medical-record.component';
import { RecordPaymentComponent } from './office-assistant-dashboard/record-payment/record-payment.component';
import { ViewRecordsComponent } from './doctor-dashboard/view-records/viewrecords.component';
import { ViewPaymentComponent } from './office-assistant-dashboard/view-payment/view-payment.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent}, 
    { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard], data: { roles: ['Patient']}},
    {path: 'patientdashboard', component: PatientDashboard, canActivate: [AuthGuard], data: { roles: ['Patient']}},
    {path: 'doctordashboard', component: DoctorsDashboard, canActivate: [AuthGuard], data: { roles: ['Doctor']}},
    {path: 'office-assistant-dashboard', component: OfficeAssistantDashboard, canActivate: [AuthGuard], data: { roles: ['OfficeAssistant']}},
    {path: 'bookappt', component: BookAppointmentComponent},
    {path: 'viewappt-patient', component: ViewAppointmentComponent, canActivate: [AuthGuard], data: { roles: ['Patient']}},
    {path: 'medrecord', component: MedicalRecordComponent, canActivate: [AuthGuard], data: { roles: ['Doctor']}},
    {path: 'viewrecords', component: ViewRecordsComponent, canActivate: [AuthGuard], data: { roles: ['Doctor']}},
    {path: 'recordpayment', component: RecordPaymentComponent, canActivate: [AuthGuard], data: { roles: ['OfficeAssistant']}},
    {path: 'viewpayment', component: ViewPaymentComponent , canActivate: [AuthGuard], data: { roles: ['OfficeAssistant']}}  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
