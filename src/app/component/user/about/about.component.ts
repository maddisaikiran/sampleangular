import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  user: User;
  constructor(private userService: UserService) {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.getUsersDetails();
   }
   getUsersDetails() {
    this.userService.getUserById(this.user.id).subscribe(
      (resp) => {
        this.user.fullName = resp.data.fullName;
        this.user.mobileNo = resp.data.mobileNo;
        this.user.emailId = resp.data.emailId;
      },
    );
   }
}
