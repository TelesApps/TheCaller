import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { RegisterComponent } from './register/register.component';
import { InstntAngularModule, InstntAngularService } from '@instnt/instnt-angular-sdk';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    InstntAngularModule,
    MatInputModule,
    MatButtonModule,
    
  ],
  providers: [
    InstntAngularService
  ],
})
export class LoginModule { }
