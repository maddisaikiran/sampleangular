import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timeline } from 'src/app/model/timeline';
import { User } from 'src/app/model/user';
import { TimelineService } from 'src/app/service/timeline.service';

@Component({
  selector: 'app-mytimeline',
  templateUrl: './mytimeline.component.html',
  styleUrls: ['./mytimeline.component.css']
})
export class MytimelineComponent implements OnInit {
   timelines: Timeline[] = [];
  user: User;
  constructor(private service: TimelineService, private router: Router) { }

  ngOnInit() {
    // if(localStorage.getItem("user")){
      this.user = JSON.parse(localStorage.getItem("user"));
      // this.service.getAllMyTimelinesById(getUserObj.id).subscribe(res => {
        this.service.getAllMyTimelinesById(this.user.id).subscribe(res => {
         this.timelines = res.data;
        //this.users = res;
      })
  
  }

}
