import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../component-can-deactivate';
import { Timeline } from '../model/timeline';
import { User } from '../model/user';
import { TimelineService } from '../service/timeline.service';

@Component({
  selector: 'app-addtimeline',
  templateUrl: './addtimeline.component.html',
  styleUrls: ['./addtimeline.component.css']
})
export class AddtimelineComponent implements OnInit, ComponentCanDeactivate {
 canLeave(): boolean{
if(this.AddTimelineForm.dirty){
  return window.confirm("You have some unsaved changes. Save it before leaving");
}
return true;
 }


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
  
    this.service.addTimeLine(this.timeline, this.user.id).subscribe((data) =>{
      this.AddTimelineForm.reset({});
    });
    alertify.success("TimeLine Added Successfully");
  }

  
}
