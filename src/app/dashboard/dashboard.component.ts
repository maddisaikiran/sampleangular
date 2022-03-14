import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails = null as any;
  userToUpdate = {
    id: null,
    fullName:"",
    mobile:null,
    emailId:"",
    password:"",
    userStatus:true,
    admin:null,
    friend: null
  }
  constructor(private service: UserService) {
    this.getUsersDetails();
  }
  getUsersDetails() {
    this.service.getAllUsers().subscribe(
      (resp) => {
        console.log(resp);
        this.userDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit() {
  }

  edit(studuent: any){
    this.userToUpdate = studuent;
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

}
