import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../service/user.service';
import * as alertify from 'alertifyjs';
import { User } from '../model/user';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  loginForm: FormGroup;

  user: User = new User();

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.user = new User();
    this.loginForm = new FormGroup({
      email: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required),
    });
  }

  ngOnInit() {}

  login() {
    this.userService
    .getUserByEmailIdAndPassword(this.user)
    .subscribe((userData: User) => {
      this.user = userData;
      if (userData != null && this.user.userStatus == true && this.user.email == userData.email && this.user.password== userData.password) {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("name",this.user.fullName);
        alertify.success("User login successfully goes to dashboard",Date())
        this.router.navigate(["/password/home"]);
      }
      else{
        alertify.error("wrong email and password");
           this.router.navigate([""]);
      }
});
}
        
  
}
