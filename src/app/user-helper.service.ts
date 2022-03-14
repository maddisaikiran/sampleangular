import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendService } from './friend.service';
import { User } from './user';
import { UserService } from './user.service';
import * as _ from 'underscore';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class UserHelperService {

  constructor(private friendService: FriendService, private userService: UserService) { }

mapUserToFriendRequest(userArray: any[], friendRequestArray: Friend[]): Observable<any> {
  let finalUserList = [];
  return new Observable(observer => {
    userArray.forEach(user => {
      if(friendRequestArray.length === 0){
        user.isNewUser = true;
        finalUserList.push(user);
        return;
      }
      let elementMatch = _.find(friendRequestArray, function (friendReq) {
        return friendReq.userId === user.id || friendReq.friendId === user.id;
      })

      if (elementMatch && elementMatch.friendId === user.id && elementMatch.status === 'Request Pending') {
        user.status = elementMatch.status;
        user.isRequested = true;
        finalUserList.push(user);
      }

      if (elementMatch && (elementMatch.friendId === user.id || elementMatch.userId === user.id) && elementMatch.status === 'Request Rejected') {
        user.status = elementMatch.status;
        user.isRejected = true;
        finalUserList.push(user);
      }

      if (!elementMatch) {
        user.isNewUser = true;
        finalUserList.push(user);
      }
    });
    observer.next(finalUserList);
  })
}


  createNetworkUserList(userId, allUsers: User[]): Observable<any> {
    return new Observable(observer => {
      allUsers = _.filter(allUsers,function(user) { return user.id !== userId;});
      if (allUsers.length === 0) {
        observer.next(allUsers);
      }
      this.friendService.getAllFriendRequests().subscribe(friendRequestArray => {
        friendRequestArray = _.filter(friendRequestArray, function(request) {
          return request.userId === userId || request.friendId === userId;
        })
        this.mapUserToFriendRequest(allUsers, friendRequestArray).subscribe(mappedFriendList => {
          if(mappedFriendList.length === 0){
            observer.next(mappedFriendList);
          }
        })
      })
    })
  }
  createNewFriendRequest(friendReqObject): Observable<any> {
    return new Observable(observer => {
      this.friendService.createRequest(friendReqObject).subscribe(() => {
        observer.next();
      });
    });
  }

  prepareRequestingFriends(filteredRequests): Observable<any> {
    return new Observable(observer => {
      filteredRequests.forEach(element => {
        this.userService.getUserById(element.uniqueId).subscribe(friendDetails => {
          element.fullName = friendDetails.fullName;
        
        });
      });
    });
  }

  loadRequestingFriends(userId): Observable<any> {
    return new Observable(observer => {
      let friendsArray = [];
      this.friendService.getAllFriendRequests().subscribe(friendRequests => {
        let filteredRequests = _.filter(friendRequests, function (request) {
          return (request.userId === userId || request.friendId === userId)
        });

        filteredRequests.forEach(oneRequest => {
          if ((oneRequest.userId === userId || oneRequest.friendId === userId) && oneRequest.status === 'You are friend') {
            oneRequest.uniqueId = oneRequest.userId === userId ? oneRequest.friendId : oneRequest.userId;
            oneRequest.isFriend = true;
            friendsArray.push(oneRequest);
          } else if (oneRequest.friendId === userId && oneRequest.status === 'Request Pending') {
            oneRequest.uniqueId = oneRequest.userId;
            oneRequest.isRequest = true;
            friendsArray.push(oneRequest);
          }
        });

        if (friendsArray.length === 0) {
          observer.next(friendsArray);
          return;
        }

        this.prepareRequestingFriends(friendsArray).subscribe(result => {
          observer.next(result);
        });
      });
    });
  }







}
