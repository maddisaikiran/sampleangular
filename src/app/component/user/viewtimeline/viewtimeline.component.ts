import { Component, OnInit } from '@angular/core';
import { Timeline } from 'src/app/model/timeline';
import { User } from 'src/app/model/user';
import { FriendService } from 'src/app/service/friend.service';
import { TimelineService } from 'src/app/service/timeline.service';

@Component({
  selector: 'app-viewtimeline',
  templateUrl: './viewtimeline.component.html',
  styleUrls: ['./viewtimeline.component.css']
})
export class ViewtimelineComponent implements OnInit {
timelines: Timeline[];
users: User[];
loggedInUser: User;
  constructor(private service: TimelineService, private serv: FriendService) { }

  ngOnInit() {
    this.loggedInUser= JSON.parse(localStorage.getItem("user"));
    this.getUserFriendsTimelines();
  }
  private getUserFriendsTimelines(){
    this.service.getUserByFriendByTimelineById(this.loggedInUser.id).subscribe((resp) => {
      this.timelines=resp.data;
  
      console.log(this.timelines);
    },
      (err) => {
        console.log(err);
      }
      );

    }
}
