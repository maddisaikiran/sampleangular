import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  public createMessage(newMessage: Message): Observable<Message>{
    return this.http.post<Message>("http://localhost:8080/message",newMessage);
  }

  public getMessagesByFriendId(friendId: number): Observable<any>{
    return this.http.get<any>("http://localhost:8080/message/friend/"+friendId);
  }
  public getMessagesByUserId(userId: number): Observable<any>{
    return this.http.get<any>("http://localhost:8080/message/user/"+userId);
  }

}
