import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { RegistersuccessComponent } from './registersuccess/registersuccess.component';
import { RegisterfailComponent } from './registerfail/registerfail.component';

const routes: Routes = [
{path : "", redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent ,

children :[
  {path: 'registration', component: RegistrationComponent },
  {path: 'login', component: LoginPageComponent }
] }, 
{ path: 'registersuccess', component: RegistersuccessComponent},
{ path: 'registerfail', component: RegisterfailComponent},
{ path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
