import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Timeline } from '../timeline';
import { TimelineService } from '../timeline.service';
import { User } from '../user';

@Component({
  selector: 'app-viewtimeline',
  templateUrl: './viewtimeline.component.html',
  styleUrls: ['./viewtimeline.component.css']
})
export class ViewtimelineComponent implements OnInit {
mytimelines: Timeline[];
users: User[];
loggedInUser: User;
  constructor(private service: TimelineService, private serv: FriendService) { }

  ngOnInit() {
    this.loggedInUser= JSON.parse(localStorage.getItem("user"));
    this.getUserFriendsTimelines();
  }
  private getUserFriendsTimelines(){
    this.service.getUserByFriendByTimelineById(this.loggedInUser.id).subscribe((resp) => {
      this.mytimelines=resp;
  
      console.log(this.mytimelines);
    },
      (err) => {
        console.log(err);
      }
      );

    }
}
