import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstntAngularService } from '@instnt/instnt-angular-sdk';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

firebase.initializeApp(environment.firebaseConfig);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    InstntAngularService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
