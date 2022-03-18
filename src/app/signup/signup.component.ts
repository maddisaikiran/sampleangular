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
  registerForm: FormGroup;
  user: User;
  constructor(private router: Router,private service: UserService) {
    this.user = new User();
    this.registerForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("",Validators.required),
      mobile: new FormControl("", [Validators.required, Validators.minLength(10) ]),
     userStatus: new FormControl(true, [Validators.required]),
      //  userStatus:new FormControl(true,[]),
    });
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

  register() {
    this.user.fullName = this.registerForm.value.name;
    this.user.emailId = this.registerForm.value.email;
    this.user.mobile = this.registerForm.value.mobile;
    this.user.password = this.registerForm.value.password;
    this.user.userStatus = this.registerForm.value.userStatus;

    // this.user.userStatus = this.registerForm.value.userStatus;
    this.service.addUser(this.user).subscribe((data) => {
          console.log(data);
        alertify.success("User successfully created");
        });
    
    // localStorage.setItem("role", "user");

   
    this.router.navigate(["/userlogin"]);
  }
}
