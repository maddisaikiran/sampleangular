import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Timeline } from '../timeline';
import { TimelineService } from '../timeline.service';
import { User } from '../user';

@Component({
  selector: 'app-addtimeline',
  templateUrl: './addtimeline.component.html',
  styleUrls: ['./addtimeline.component.css']
})
export class AddtimelineComponent implements OnInit {

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
  }
  addTimeLines() {
  
    this.timeline.timeLineName = this.AddTimelineForm.value.timeLineName;
    this.timeline.message = this.AddTimelineForm.value.message;
    console.log(this.timeline);
  
  //  this.service.addTimeLines(this.timeline).subscribe((res) => {
    this.service.addTimeLine(this.timeline, this.user.id).subscribe((data) =>{
      console.log(data);
    });
  //  })
    
    this.router.navigate(["/mytimeline"]);
  }

  
}
