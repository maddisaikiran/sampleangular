import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform: FormGroup;
  user: User;
  constructor(private router: Router,private service: UserService) {
    this.user = new User();
     this.signupform = new FormGroup({
        name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
       password: new FormControl("", Validators.required),
      cpassword: new FormControl("",Validators.required),
       mobile: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      userStatus: new FormControl(true, Validators.required),
      
     },
    
     
     );
   }

  ngOnInit() {
  }

  // signup(){
  //   this.service.addUser(this.user).subscribe(
  //     data => {
  //       this.router.navigate(['/home']);
  //     },
  //     error => {
  //       this.msg="Email already exists";
  //     }
  //   );
  // }

  signup() {
    //this.user.fullName = this.signupform.value.name;
    // this.user.emailId = this.signupform.value.email;
    // this.user.mobile = this.signupform.value.mobile;
    // this.user.password = this.signupform.value.password;
     this.user.userStatus = this.signupform.value.userStatus;

    // this.user.userStatus = this.registerForm.value.userStatus;
    this.service.addUser(this.user).subscribe((data) => {
          console.log(data);
        alertify.success("User successfully created");
        this.router.navigate(["/userlogin"]);
        },
        error => {
          alertify.error("Registration Failed");
        }
        
        
        
        );
    
    // localStorage.setItem("role", "user");

   
   
  }
}
