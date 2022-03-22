import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Timeline } from '../timeline';
import { TimelineService } from '../timeline.service';
import { User } from '../user';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-addtimeline',
  templateUrl: './addtimeline.component.html',
  styleUrls: ['./addtimeline.component.css']
})
export class AddtimelineComponent implements OnInit {
  mytimelines: Timeline[];
  user: User;
   timeline : Timeline;
   AddTimelineForm: FormGroup;

  constructor(private router: Router, private service: TimelineService) {
    this.timeline = new Timeline();
    this.AddTimelineForm = new FormGroup({
      timeLineName: new FormControl("",[Validators.required]),
      message : new FormControl("",[Validators.required])
      
    });
   }
 
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.service.getAllMyTimelinesById(this.user.id).subscribe(res => {
      this.mytimelines = res;
   })
  }
  public addTimeLines() {
  
    this.timeline.timeLineName = this.AddTimelineForm.value.timeLineName;
    this.timeline.message = this.AddTimelineForm.value.message;
    console.log(this.timeline);
    this.service.addTimeLine(this.timeline, this.user.id).subscribe((data) =>{
        // this.timeline.push(this.AddTimelineForm.value);

      console.log(data);
    });
    alertify.success("TimeLine Added Successfully");

    
    // this.router.navigate(["/mytimeline"]);
  }

  
}
