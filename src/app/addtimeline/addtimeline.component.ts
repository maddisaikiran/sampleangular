import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';
import { Timeline } from '../model/timeline';
import { User } from '../model/user';
import { TimelineService } from '../service/timeline.service';

@Component({
  selector: 'app-addtimeline',
  templateUrl: './addtimeline.component.html',
  styleUrls: ['./addtimeline.component.css']
})
export class AddtimelineComponent implements OnInit {

  timelines: Timeline[];
  user: User;
   timeline : Timeline;
   AddTimelineForm: FormGroup;

  constructor(private router: Router, private service: TimelineService) {
    this.timeline = new Timeline();
    this.AddTimelineForm = new FormGroup({
      image: new FormControl("",[Validators.required]),
      message : new FormControl("",[Validators.required])
      
    });
   }
 
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.service.getAllMyTimelinesById(this.user.id).subscribe(res => {
      this.timelines = res;
   })
  }
  public addTimeLines() {

  
    this.timeline.image = this.AddTimelineForm.value.image;
    this.timeline.message = this.AddTimelineForm.value.message;
    this.timeline.count = 0;
  
    this.service.addTimeLine(this.timeline, this.user.id).subscribe((data) =>{
    });
    alertify.success("TimeLine Added Successfully");
  }

  
}
