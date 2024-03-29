
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Timeline } from 'src/app/model/timeline';
import { User } from 'src/app/model/user';
import { TimelineService } from 'src/app/service/timeline.service';
import * as alertify from 'alertifyjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timelines: Timeline[] = [];
  user: User;
  isRecordNotFound: boolean = false;
  constructor(private service: TimelineService, private router: Router) { }

  ngOnInit() {

      this.user = JSON.parse(localStorage.getItem("user"));
        this.service.getAllMyTimelinesById(this.user.id).subscribe(res => {
         this.timelines = res.data;
         console.log(this.timelines);
         if(!_.isNil(this.timelines) && this.timelines.length>0){
         console.log("user-data");
         this.isRecordNotFound = false
         } else {
         this.isRecordNotFound = true
         }

      })

  }
  delete(timeId: number){
    this.service.deleteTimeline(timeId).subscribe(result => {
      alertify.success("deleted successfully");
      this.ngOnInit();
    });



  }

}
