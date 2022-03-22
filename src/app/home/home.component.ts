
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timeline } from '../timeline';
import { TimelineService } from '../timeline.service';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mytimelines: Timeline[];
  user: User;
  constructor(private service: TimelineService, private router: Router) { }

  ngOnInit() {
    // if(localStorage.getItem("user")){
      this.user = JSON.parse(localStorage.getItem("user"));
      // this.service.getAllMyTimelinesById(getUserObj.id).subscribe(res => {
        this.service.getAllMyTimelinesById(this.user.id).subscribe(res => {
         this.mytimelines = res;
        //this.users = res;
      })
    // }
   // this.user = JSON.parse(localStorage.getItem("user"));
    // this.service.getAllMyTimelinesById(this.user.id).subscribe((res) => {
    //   this.mytimelines = res;
    // });
  }

}
