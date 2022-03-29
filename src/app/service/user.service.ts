import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string;

  constructor(private http: HttpClient,private router: Router) {
   }
   public addUser(user: User): Observable<User>{
     return this.http.post<any>("http://localhost:8080/user", user).pipe(map( (res) => res.data as User));
   }
   public loginUser(user: User): Observable<User>{
     return this.http.post<User>("http://localhost:8080/user/login",user);
   }

   public updateUser(user: User): Observable<User>{
    return this.http.put<User>("http://localhost:8080/user",user);
  }
   public getAllUser(): Observable<any>{
     return this.http.get<any>("http://localhost:8080/users");
  }
  public getUserById(id: number): Observable<User>{
    return this.http.get<User>("http://localhost:8080/user"+"/"+id);
  }
  public deleteUser(id: number):any {
    return this.http.delete("http://localhost:8080/user"+"/"+id);
  }
  public getUserByEmailIdAndPassword(user: User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/user"+"/login",user);
  }

  public updateUserStatus(id: number):Observable<User>{
    return this.http.put<User>("http://localhost:8080/user/"+ id +"/status/false",id);
  }
  public updateUserStatuss(id: number):Observable<User>{
    return this.http.put<User>("http://localhost:8080/user/"+ id +"/status/true",id);
  }

}
