import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user: User;
updateForm = new FormGroup({
  fullName:new FormControl(''),
  mobile: new FormControl(''),
  email: new FormControl('')
})
constructor(private service: UserService) { 
  
}
ngOnInit() {

  this.user = JSON.parse(localStorage.getItem("user"));
    this.service.getUserById(this.user.id).subscribe(
      (resp) => {
        this.user.fullName = resp.data.fullName;
        this.user.mobile = resp.data.mobile;
        this.user.email = resp.data.email;
      },
    );
}
updateUsers(){
  this.service.updateUser(this.user).subscribe(
    (resp) => {
      alertify.success("updated");
    },
  );
}
}



