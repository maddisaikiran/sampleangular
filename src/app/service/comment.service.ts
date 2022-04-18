import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  public createComment(newComment: Comment): Observable<Comment>{
    return this.http.post<Comment>("http://localhost:8080/comment",newComment);
  }

  public getCommentsByMessageId(timeId: number): Observable<any>{
    return this.http.get<any>("http://localhost:8080/comment/time/"+timeId);
  }
}
