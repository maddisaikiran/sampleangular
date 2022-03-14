import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  
  
  user: User;
  AddUserForm: FormGroup;
  
    

  constructor(
    private service: UserService,
    private router: Router
  ) {
    this.user = new User();
    this.AddUserForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      fullName: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required]),
    
      emailId: new FormControl(null, [Validators.required]),
      
      userStatus: new FormControl(true, [Validators.required]),
     
    });
  }

  ngOnInit() {
    this.service.getUserById(history.state.id).subscribe((res) => {
      this.AddUserForm.patchValue({
        id: res.id,
        fullName: res.fullName,
        mobile: res.mobile,
        emailId: res.emailId,
        userStatus: res.userStatus,
      });
    });
  
  }

  updateUser() {
    this.user.id = this.AddUserForm.value.id;
    this.user.fullName = this.AddUserForm.value.fullName;
    this.user.mobile = this.AddUserForm.value.mobile;
    
    this.user.emailId = this.AddUserForm.value.emailId;
    
    this.user.userStatus = this.AddUserForm.value.userStatus;
   

    this.service.updateUser(this.user).subscribe((res) => {
      console.log(res);
    
    });
    this.router.navigate(["/adminaccount"]);
  }
}