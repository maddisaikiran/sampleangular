import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Friend } from '../model/friend';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient,private router: Router) { }

  public  createRequest(newRequest: Friend): Observable<Friend>{
    return this.http.post<Friend>("http://localhost:8080/friends/createrequest", newRequest);
        
}

public getAllFriendRequests(): Observable<Friend[]>{
  return this.http.get<any[]>("http://localhost:8080/friends");
}
public getFriendById(id: number): Observable<Friend>{
 return this.http.get<Friend>("http://localhost:8080/friends/"+id);
}

public getFriendsByUserId(userId:number): Observable<any>{
  return this.http.post<any>("http://localhost:8080/users/network/",userId);
}

public getUserByFriendByOrderStatusById(friendId: number): Observable<any>{
  return this.http.get<any>("http://localhost:8080/friends/"+friendId);
}


}
