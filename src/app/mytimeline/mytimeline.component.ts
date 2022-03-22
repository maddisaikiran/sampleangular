import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Friend } from '../friend';
import { Timeline } from '../timeline';
import { TimelineService } from '../timeline.service';
import { User } from '../user';

@Component({
  selector: 'app-mytimeline',
  templateUrl: './mytimeline.component.html',
  styleUrls: ['./mytimeline.component.css']
})
export class MytimelineComponent implements OnInit {
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
