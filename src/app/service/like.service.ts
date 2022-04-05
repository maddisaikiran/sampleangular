import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Liked } from '../model/liked';


@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient,private router: Router) { }

  public createLike(newLike: Liked): Observable<Liked> {
    return this.http.post<Liked>("http://localhost:8080/like",newLike);

  }

  public getUserLikesByMessageById(timeId: number): Observable<any> {
    return this.http.get<any>("http://localhost:8080/like/"+timeId);
  }
}
