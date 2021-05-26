import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration/registration.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RegistersuccessComponent } from './registersuccess/registersuccess.component';
import { RegisterfailComponent } from './registerfail/registerfail.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginPageComponent,
    HomeComponent,
    ErrorComponent,
    RegistersuccessComponent,
    RegisterfailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    HttpClientModule,
    OAuthModule.forRoot()
  ],

  providers: [RegistrationService],
  
    bootstrap: [AppComponent]
})
export class AppModule { }
