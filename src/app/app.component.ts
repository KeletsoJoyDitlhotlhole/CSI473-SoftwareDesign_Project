import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes'; 
import { FormsModule } from '@angular/forms';
import { initializeKeycloak } from './keycloak.config';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';



@Component({
  selector: "medisafe-clinic",
  template: `<router-outlet></router-outlet>`, 
  standalone: true,
  imports: [CommonModule, AppRoutingModule, FormsModule, KeycloakAngularModule], 
  
})
export class AppComponent { 
  title = "csiproject";
}
