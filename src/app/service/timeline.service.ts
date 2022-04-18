import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Timeline } from '../model/timeline';


@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http: HttpClient) { }

 


  public  addTimeLine(timeline: Timeline, id: number): Observable<Timeline>{
    return this.http.post<Timeline>("http://localhost:8080/timeline/user/" +id, timeline);
        
}

    public getAllMyTimelines(): Observable<Timeline[]>{
      return this.http.get<Timeline[]>("http://localhost:8080/timeline");
    }
   public getAllMyTimelinesById(id: number): Observable<any> {
     return this.http.get<any>("http://localhost:8080/timeline" + "/user/" + id);
   }


public getUserByFriendByTimelineById(userId: number): Observable<any> {
  return this.http.get<any>("http://localhost:8080/timeline"+"/friend/"+userId);
}

public deleteTimeline(timeId: number): Observable<Timeline>{
  return this.http.delete<Timeline>("http://localhost:8080/timeline/"+timeId);
}


}
