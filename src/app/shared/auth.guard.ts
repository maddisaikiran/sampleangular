import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService,private router : Router){}
  canActivate()
       {
         if(this.auth.IsLoggedIn()){
           return true;
         }
         alert("you have not logged In");
         this.router.navigate(['/landingpage']);
    return false;
  }
  
}
