import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

import * as alertify from 'alertifyjs';
import { User } from '../model/user';

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
      emailId: new FormControl("", Validators.required),
       password: new FormControl("", Validators.required),
      cpassword: new FormControl("",Validators.required),
       mobileNo: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      userStatus: new FormControl(true, Validators.required),

     },
     );
   }

  ngOnInit() {
  }
  signup() {
     this.user.userStatus = this.signupform.value.userStatus;
    this.service.addUser(this.user).subscribe((data) => {
        alertify.success("User successfully created");
        this.router.navigate(["/userlogin"]);
        },
        error => {
          alertify.error("Registration Failed");
        }
        );
  }
}
