import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import * as alertify from 'alertifyjs';
import { User } from '../model/user';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  userDetails = null as any;
  userToUpdate = {
    id: null,
    fullName:"",
    mobileNo:null,
    emailId:"",
    password:"",
    userStatus:true,
    admin:null,
    friend: null,
    timelines:null,
    likes:null,
    messages:null
  }

  constructor(private service: UserService, private router: Router) {
    this.getUsersDetails();
  }
  getUsersDetails() {
    this.service.getAllUser().subscribe(
      (resp) => {
        this.userDetails = resp.data;
      },
    );
  }
  updateUsers(){
    this.service.updateUser(this.userToUpdate).subscribe(
      (resp) => {
        alertify.success("User Profile Updated")
      },
    );
  }
  edit(studuent: any){
    this.userToUpdate = studuent;
  }
  ngOnInit() {
  }

}
