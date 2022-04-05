import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { Liked } from 'src/app/model/liked';
import { Timeline } from 'src/app/model/timeline';
import { User } from 'src/app/model/user';
import { CommentService } from 'src/app/service/comment.service';
import { LikeService } from 'src/app/service/like.service';
import { TimelineService } from 'src/app/service/timeline.service';

@Component({
  selector: 'app-mytimeline',
  templateUrl: './mytimeline.component.html',
  styleUrls: ['./mytimeline.component.css']
})
export class MytimelineComponent implements OnInit {
   timelines: Timeline[];
  user: User;
  likes: Liked[];
   comments: Comment[];


  constructor(private service: TimelineService, private router: Router, private likedService: LikeService, private commentService: CommentService) { 
  }
  
  ngOnInit() {
   
      this.user = JSON.parse(localStorage.getItem("user"));
        this.service.getAllMyTimelinesById(this.user.id).subscribe(resp => {
         this.timelines = resp.data;

         if(this.timelines.length > 0) {
            for (let i in this.timelines) {
              this.likedService.getUserLikesByMessageById(this.timelines[i].timeId).subscribe(res =>{
                this.timelines[i].likes = res.data; 
              });
              this.commentService.getCommentsByMessageId(this.timelines[i].timeId).subscribe(res =>{
                this.timelines[i].comments = res.data;
            });
              
          }}
  })
}
  
  }


