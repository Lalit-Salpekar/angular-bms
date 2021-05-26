import { Component, Input, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service'; 
import { RegistrationDetailsModel } from './registration.model';
import {FormControl,FormGroup,Validators,AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';  
import * as moment from 'moment';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationDetailsModel : RegistrationDetailsModel =new RegistrationDetailsModel();
  submitted = false; 
  usersaveDetails : FormGroup;
  constructor(private registrationService : RegistrationService,private router :Router) { }

  ngOnInit() {
      this.usersaveDetails =new FormGroup({
      name: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
      user_name: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
      password: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
      date_of_birth: new FormControl('' , [Validators.required]),
      guardian_name : new FormControl('',[Validators.required,Validators.minLength(5)]),
      address:new FormControl('',[Validators.required]),
      email_address: new FormControl('',[Validators.required,Validators.email]),
      gender:new FormControl('',[Validators.required]),
      marital_status:new FormControl('',[Validators.required]),
      contact_number:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]+$')]),
      account_type:new FormControl('',[Validators.required]),
  
    });

    this.submitted=false;  
  }
  


  saveUser(saveUser){
    this.registrationDetailsModel  =new RegistrationDetailsModel();
    this.registrationDetailsModel.name= this.Name.value;
    this.registrationDetailsModel.username= this.UserName.value;
    this.registrationDetailsModel.password= this.Password.value;
    this.registrationDetailsModel.date0fBirth= this.DoB.value;
    this.registrationDetailsModel.guardianName= this.GuardianName.value;
    this.registrationDetailsModel.address= this.Address.value;
    this.registrationDetailsModel.emailAddress= this.EmailAddress.value;
    this.registrationDetailsModel.gender= this.Gender.value;
    this.registrationDetailsModel.maritalStatus= this.MaritalStatus.value;
    this.registrationDetailsModel.contactNo= this.ContactNum.value;
    this.registrationDetailsModel.accountType= this.AccountType.value;
    
    this.addUserDtl();
    this.submitted = true;
    this.router.navigate(['registersuccess']);
    
  }



  addUserDtl(){
    this.registrationService.addUser(this.registrationDetailsModel).subscribe(data => console.log(data), error => console.log(error));
  }

  get Name(){
    return this.usersaveDetails.get('name');
  }

  get UserName(){
    return this.usersaveDetails.get('user_name');
  }

  get Password(){
    return this.usersaveDetails.get('password');
  }

  get DoB(){
    return this.usersaveDetails.get('date_of_birth');
  }

  get GuardianName(){
    return this.usersaveDetails.get('guardian_name');
  }

  get Address(){
    return this.usersaveDetails.get('address');
  }
  get EmailAddress(){
    return this.usersaveDetails.get('email_address');
  }

  get Gender(){
    return this.usersaveDetails.get('gender');
  }

  get MaritalStatus(){
    return this.usersaveDetails.get('marital_status');
  }

  get ContactNum(){
    return this.usersaveDetails.get('contact_number');
  }
  get AccountType(){
    return this.usersaveDetails.get('account_type');
  }


}
