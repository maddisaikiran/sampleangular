import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/model/friend';
import { User } from 'src/app/model/user';
import { FriendService } from 'src/app/service/friend.service';


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
    this.userDetails = resp.data;
  },
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
);

}

checkIsFriend(friendId,friend,status){
if(friend && (friend.userId == this.loggedInUser.id || friend.friendId == this.loggedInUser.id) && friend.status==status){
return true;
}return false;
}

}


