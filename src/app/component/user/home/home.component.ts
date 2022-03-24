
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timeline } from 'src/app/model/timeline';
import { User } from 'src/app/model/user';
import { TimelineService } from 'src/app/service/timeline.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timelines: Timeline[] = [];
  user: User;
  constructor(private service: TimelineService, private router: Router) { }

  ngOnInit() {
    
      this.user = JSON.parse(localStorage.getItem("user"));
      // this.service.getAllMyTimelinesById(getUserObj.id).subscribe(res => {
        this.service.getAllMyTimelinesById(this.user.id).subscribe(res => {
         this.timelines = res.data;
        
      })
   
  }

}
