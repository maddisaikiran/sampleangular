import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  loggedIn(){
    return localStorage.getItem('user');
  }
 logout(){
   localStorage.removeItem('user');
   alertify.success("Logout Success");
   this.router.navigate(['/landingpage'])
   
 }

}
