import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import * as alertify from 'alertifyjs';

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
    private service: UserService
  ) {
    this.user = new User();
    this.loginForm = new FormGroup({
      email: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required),
    // role: new FormControl(""),
    // userStatus: new FormControl(true, Validators.required),
    });
  }

  ngOnInit() {}

  login() {
    // if(this.user.userStatus == true){
      // if(this.loginForm.value.role == "user"){
        console.log(this.loginForm.value.email);
        console.log(this.loginForm.value.password);
        //   this.user.emailId = this.loginForm.value.email;
        //   this.user.password = this.loginForm.value.password;
        //  this.user.userStatus = this.loginForm.value.userStatus;
          this.service
          .getUserByEmailIdAndPassword(this.user)
          .subscribe(async (userData: User) => {
            this.user = userData;
            if (userData != null && this.user.userStatus == true && this.user.emailId == userData.emailId && this.user.password== userData.password) {
              // localStorage.setItem("isAuthenticated", "true");
              localStorage.setItem("user", JSON.stringify(userData));
              localStorage.setItem("name",this.user.fullName);
              alertify.success("User login successfully goes to dashboard")
              this.router.navigate(["/password/home"]);
            }
            else{
              alertify.error("wrong email and password");
                 this.router.navigate([""]);
            }
  });
        //  }
        //  else {
        //   this.ngOnInit();
        //   this.loginForm.patchValue({
        //     username: "",
        //     password: "",
        //   });
        //   this.router.navigate([""]);
        // }
         
        // }
        // else {
        //   this.ngOnInit();
        //   this.loginForm.patchValue({
        //     username: "",
        //     password: "",
        //   });
        //   alertify.error("wrong email and password");
        //   this.router.navigate([""]);
        // }
      // }   
      // else{
      //   this.ngOnInit();
      //   this.loginForm.patchValue({
      //     username: "",
      //     password: "",
      //   });
      //   this.router.navigate([""]);
      // }
  }
}
