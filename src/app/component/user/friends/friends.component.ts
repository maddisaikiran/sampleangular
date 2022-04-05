import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/model/message';
import { User } from 'src/app/model/user';
import { FriendService } from 'src/app/service/friend.service';
import { MessageService } from 'src/app/service/message.service';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  messageForm: FormGroup;
users : User[];
loggedInUser: User;
messagesList: Message;
messages: Message[];
  constructor(private service : FriendService,private formBuilder: FormBuilder,private messageService: MessageService) { }

  ngOnInit() {
    this.createForm();
    this.loggedInUser= JSON.parse(localStorage.getItem("user"));
    this.getUserFriends();
    this.messageService.getMessagesByUserId(this.loggedInUser.id).subscribe(res=>{
this.messages = res;
console.log(this.messages);
console.log(this.loggedInUser.id);
    })
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
    })
  }    
  private getUserFriends(){
    this.service.getUserByFriendByOrderStatusById(this.loggedInUser.id).subscribe((resp) => {
      // this.users = resp.filter(user => user.id !==this.loggedInUser.id);
      this.users=resp.data;
      console.log(this.users);
    },
    (err) => {
      console.log(err);
    }
    );
}



}
