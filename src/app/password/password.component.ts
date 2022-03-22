import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timeline } from '../timeline';
import { TimelineService } from '../timeline.service';
import { User } from '../user';

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
