import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  newUser:User;
  userSignupForm =this.fb.group({
    userName: ['',[Validators.required,Validators.minLength(5)],],
    pw:['',[Validators.required,Validators.minLength(6)]],
    emailAddress:['',Validators.required]
  })
  
  constructor(private fb:FormBuilder,private userService:UserService) {
   
   }

  ngOnInit() {
    
  }
  onSubmit(){
    this.newUser(this.userSignupForm.get("userName"),this.userSignupForm.get("pw"),this.userSignupForm.get(emailAddress))
    this.userService.addUser()
  }

}
