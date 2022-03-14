import { Component, OnInit } from '@angular/core';
import { endWith, takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../base/base.component';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';
import { User } from '../user';
import { UserHelperService } from '../user-helper.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  userDetails : User[];
  loggedInUser: User;
 
  constructor(private service: FriendService) {
    
  }
 
  ngOnInit() {  
    this.loggedInUser= JSON.parse(localStorage.getItem("user"));
    this.getUserFriends();
}

private getUserFriends(){
    this.service.getFriendsByUserId(this.loggedInUser.id).subscribe((resp) => {
      this.userDetails = resp.filter(user => user.id !==this.loggedInUser.id);
    },
    (err) => {
      console.log(err);
    }
    );
}

sendFriendRequest(userFriend:User,statusCode:string){
let newRequest: Friend=new Friend();
if(userFriend && userFriend.friend && userFriend.friend.id){
newRequest.id = userFriend.friend.id
}
newRequest.user=this.loggedInUser;
newRequest.friend=userFriend;
newRequest.statusCode=statusCode;
this.service.createRequest(newRequest).subscribe((resp) => {
  this.getUserFriends();
},
(err) => {
  console.log(err);
}
);


}



}


