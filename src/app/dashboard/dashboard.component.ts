import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fullName="";
  users: User[];
  constructor(private router: Router) {
    
  }
 
  ngOnInit() {
      this.fullName = localStorage.getItem("name");
 
  }
  loggedIn(){
    return localStorage.getItem('user');
  }

  
  logout(){
    localStorage.removeItem("user");
    this.router.navigate(["/landingpage"]);
  }

 

}
