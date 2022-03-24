import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit{

  sideBarOpen = true;
constructor(){

}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
ngOnInit() {
}
}
