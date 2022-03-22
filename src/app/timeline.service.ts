import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Timeline } from './timeline';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) { }

 



  // public  addTimeLines(timeline : Timeline): Observable<Timeline>{
  //   return this.http.post<Timeline>("http://localhost:8080/timeline" + timeline);

  // }
  public addTimeLines(timeline: Timeline): Observable<Timeline>{
    return this.http.post<Timeline>("http://localhost:8080/timeline",timeline);
  }

  // public  addTimeLines(time : Timeline): Observable<Timeline>{
  //   return this.http.post<Timeline>("http://localhost:8080/timeline/user" + time);

  // }

  public  addTimeLine(timeline: Timeline, id: number): Observable<Timeline>{
    return this.http.post<Timeline>("http://localhost:8080/time/user/" +id, timeline);
        
}

    public getAllMyTimelines(): Observable<Timeline[]>{
      return this.http.get<Timeline[]>("http://localhost:8080/timelines");
    }
   public getAllMyTimelinesById(id: number): Observable<Timeline[]> {
     return this.http.get<Timeline[]>("http://localhost:8080/timelines" + "/pos/" + id);
   }

  //  public addUserToTimeline(id: number): Observable<Timeline>{
  //    return this.http.post<Timeline>("http://localhost:8080/timelines/user/" + id, id);
  //  }

public getUserByFriendByTimelineById(userId: number): Observable<Timeline[]> {
  return this.http.get<Timeline[]>("http://localhost:8080/time"+"/pos/"+userId);
}




}
