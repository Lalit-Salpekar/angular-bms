import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private oauthService : OAuthService) {


   }

   userLoginDetails =new FormGroup({}
   );
  ngOnInit(): void {
  }

}
