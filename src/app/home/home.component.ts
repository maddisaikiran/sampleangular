import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = new User();
  user1 = new User();
  msg = '';

  constructor(private router: Router, private service: UserService){}

login(){
  this.service.loginUser(this.user).subscribe(
    data => {
      localStorage.setItem('token',JSON.stringify(data));
      this.router.navigate(['/useraccount'])
    },
    error => {
      this.msg = "Invalid email or password";
    }
  )
}
  // loginForm: FormGroup;
// user: User = new User();
//   constructor(
//     private router:Router,
//     private userService: UserService
//   ) {
//     this.user = new User();
//     this.loginForm = new FormGroup({
//       Email: new FormControl("", Validators.required),
//       Password: new FormControl("", [Validators.required, Validators.minLength(5),
//       ]),
//       role: new FormControl(""),
//     });

//    }

  ngOnInit() {
  }
// login(){
//   if (this.loginForm.value.role == "user") {
//     console.log(this.loginForm.value.Email);
//     console.log(this.loginForm.value.Password);
//     this.user.email = this.loginForm.value.Email;
//     this.user.password = this.loginForm.value.Password;
//     this.userService
//       .getSupervisorByUsernameAndPassword(this.supervisor)
//       .subscribe(async (supervisorData: Supervisor) => {
//         this.supervisor = supervisorData;
//         if (supervisorData != null) {
//           console.log(supervisorData);
//           localStorage.setItem("isAuthenticated", "true");
//           localStorage.setItem("role", this.loginForm.value.role);
//           localStorage.setItem("supervisor", JSON.stringify(supervisorData));
        
//           this.router.navigate(["/revfoods"]);
//         } else {
//           this.ngOnInit();
//           this.loginForm.patchValue({
//             username: "",
//             password: "",
//           });
        
//           this.router.navigate(["/home"]);
//         }
//       });
//   }
  
// }

}
