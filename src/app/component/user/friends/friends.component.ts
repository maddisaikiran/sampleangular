import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/model/message';
import { User } from 'src/app/model/user';
import { FriendService } from 'src/app/service/friend.service';
import { MessageService } from 'src/app/service/message.service';
import * as alertify from 'alertifyjs';
import { ComponentCanDeactivate } from 'src/app/component-can-deactivate';
import * as _ from 'lodash';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit, ComponentCanDeactivate{
isNoRecordsFound: boolean = false;
  canLeave(): boolean{
    if(this.messageForm.dirty){
      return window.confirm("You have some unsaved changes. Are you sure you want to navigate?");
    }
    return true;
     }
  messageForm: FormGroup;
users : User[];
loggedInUser: User;
messagesList: Message;
messageList: Message[];
messages: Message[];


  constructor(private service : FriendService,private formBuilder: FormBuilder,private messageService: MessageService) { }

  ngOnInit() {
    this.createForm();
    this.loggedInUser= JSON.parse(localStorage.getItem("user"));
    this.getUserFriends();
    if(!_.isNil(this.users)){
    this.messageService.getMessagesByFriendId(this.loggedInUser.id).subscribe({
    next: (res) =>{
this.messages = res;
console.log(this.messages);
    }
  });
  }
  }


  getMyMessages(){
    this.messageService.getMessagesByUserId(this.loggedInUser.id).subscribe(res=>{
      this.messageList = res.data;
          });
  }


  createForm(){
    this.messagesList = new Message();
    this.messageForm = this.formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]]
    });
  }

  addSubmit(userMessage: User){
    this.messagesList.message = this.messageForm.value.message;
    this.messagesList.user = this.loggedInUser;
    this.messagesList.friend = userMessage;

    this.messageService.createMessage(this.messagesList).subscribe(res =>{
               alertify.success("message sent successfully");
               this.messageForm.reset({});
    })
  }
  private getUserFriends(){
    this.service.getUserByFriendByOrderStatusById(this.loggedInUser.id).subscribe((resp) => {
      this.users=resp.data;
      if(!_.isNil(this.users) && this.users.length > 0){
      console.log("user data");
       this.isNoRecordsFound = false
      } else{
      this.isNoRecordsFound = true;
      }
    },
    );
}



}
