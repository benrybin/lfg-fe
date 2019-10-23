import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  
  userSignupForm =this.fb.group({
    userName: ['',Validators.required,Validators.minLength(5),],
    pw:['',Validators.required,Validators.minLength(6)],
    emailAddress:['',Validators.required]
  })
  
  constructor(private fb:FormBuilder) {
   
   }

  ngOnInit() {
    
  }
  onSubmit(){
    console.log(this.userSignupForm.value);
  }

}
