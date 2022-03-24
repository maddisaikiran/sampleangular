import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

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
    mobile:null,
    email:"",
    password:"",
    userStatus:true,
    admin:null,
    friend: null,
    timelines:null,
  }
  constructor(private service: UserService, private router: Router) { 
    this.getUsersDetails();
  }
  getUsersDetails() {
    this.service.getAllUser().subscribe(
      (resp) => {
        console.log(resp);
        this.userDetails = resp.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  updateUsers(){
    this.service.updateUser(this.userToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  edit(studuent: any){
    this.userToUpdate = studuent;
  }

  ngOnInit() {
  }

}
