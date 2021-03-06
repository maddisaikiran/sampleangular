import { Component, OnInit } from '@angular/core';
import { Timeline } from 'src/app/model/timeline';
import { User } from 'src/app/model/user';
import * as alertify from 'alertifyjs';
import { LikeService } from 'src/app/service/like.service';
import { TimelineService } from 'src/app/service/timeline.service';

import { Liked } from 'src/app/model/liked';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from 'src/app/model/comment';
import { ComponentCanDeactivate } from 'src/app/component-can-deactivate';

@Component({
  selector: 'app-viewtimeline',
  templateUrl: './viewtimeline.component.html',
  styleUrls: ['./viewtimeline.component.css']
})
export class ViewtimelineComponent implements OnInit, ComponentCanDeactivate {
  canLeave(): boolean{
    if(this.commentForm.dirty){
      return window.confirm("You have some unsaved changes. Are you sure you want to navigate?");
    }
    return true;
     }
 commentForm: FormGroup;
timelines: Timeline[];
users: User[];
loggedInUser: User;
comments: Comment;
likes: Liked[];
timeline: Timeline;
  constructor(private service: TimelineService, private likeService: LikeService, private formBuilder: FormBuilder, private commentService: CommentService) { 
  }

  ngOnInit() {
    this.createForm();
    this.loggedInUser= JSON.parse(localStorage.getItem("user"));
    this.getUserFriendsTimelines();
    
   
  }
  createForm() {
    this.comments = new Comment();
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
    });
  }

  addSubmit(userComment: Timeline){
this.comments.comment = this.commentForm.value.comment;
this.comments.user = this.loggedInUser;
this.comments.timeline = userComment;

   
this.commentService.createComment(this.comments).subscribe(res=>{
  alertify.success("comment added");   
  this.commentForm.reset({});
  this.getUserFriendsTimelines();
},
error =>{
  alertify.error("comment size must be 6 to 100");
}
)
  }

  addTimelineToLike(userLike : Timeline){
     let newlike: Liked = new Liked();
     newlike.user = this.loggedInUser;
     newlike.timeline = userLike;
    this.likeService.createLike(newlike).subscribe((res)=>{    
           alertify.success("like added");
           this.getUserFriendsTimelines();
    },
    error => {
      alertify.error("only 1 like added for each timeline");
    } 
    )
  } 
  private getUserFriendsTimelines(){
    this.service.getUserByFriendByTimelineById(this.loggedInUser.id).subscribe((resp) => {
      this.timelines=resp.data;
      if(this.timelines.length> 0){
        for(let i in this.timelines){
          this.likeService.getUserLikesByMessageById(this.timelines[i].id).subscribe((res) => {
                 this.timelines[i].likes = res.data;               
               });
               this.commentService.getCommentsByMessageId(this.timelines[i].id).subscribe(res =>{
                this.timelines[i].comments = res.data;          
              });
        }
      } 
    },
      );
    }
}
